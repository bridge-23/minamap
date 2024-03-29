import { MinaMap } from './MinaMap';
import { Field, Mina, PrivateKey, PublicKey, AccountUpdate, UInt8 } from 'o1js';

/*
 * This file specifies how to test the `Add2` example smart contract. It is safe to delete this file and replace
 * with your own tests.
 *
 * See https://docs.minaprotocol.com/zkapps for more info.
 */

let proofsEnabled = false;

describe('MinaMap', () => {
  let deployerAccount: PublicKey,
    deployerKey: PrivateKey,
    senderAccount: PublicKey,
    senderKey: PrivateKey,
    zkAppAddress: PublicKey,
    zkAppPrivateKey: PrivateKey,
    zkApp: MinaMap;

  beforeAll(async () => {
    if (proofsEnabled) await MinaMap.compile();
  });

  beforeEach(() => {
    const Local = Mina.LocalBlockchain({ proofsEnabled });
    Mina.setActiveInstance(Local);
    ({ privateKey: deployerKey, publicKey: deployerAccount } =
      Local.testAccounts[0]);
    ({ privateKey: senderKey, publicKey: senderAccount } =
      Local.testAccounts[1]);
    zkAppPrivateKey = PrivateKey.random();
    zkAppAddress = zkAppPrivateKey.toPublicKey();
    zkApp = new MinaMap(zkAppAddress);
  });

  async function localDeploy() {
    const txn = await Mina.transaction(deployerAccount, () => {
      AccountUpdate.fundNewAccount(deployerAccount);
      zkApp.deploy();
    });
    await txn.prove();
    // this tx needs .sign(), because `deploy()` adds an account update that requires signature authorization
    await txn.sign([deployerKey, zkAppPrivateKey]).send();
  }

  it('generates and deploys the `Add2` smart contract', async () => {
    await localDeploy();
    const countries = zkApp.countries.get();
    const fv = Field.fromBits([
      true,
      false,
      true,
      false,
      true,
      false,
      true,
      false,
    ]);
    expect(countries).toEqual(fv);
  });

  it('correctly updates the num state on the `Add2` smart contract', async () => {
    await localDeploy();

    // update transaction
    const txn = await Mina.transaction(senderAccount, () => {
      zkApp.setCountries(Field.fromBits([false, true, false]));
    });
    await txn.prove();
    await txn.sign([senderKey]).send();

    const updatedNum = zkApp.countries.get();
    expect(updatedNum).toEqual(Field.fromBits([false, true, false]));
  });
});
