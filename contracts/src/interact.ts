import { MinaMap } from './MinaMap.js';
import { Field, Mina, PrivateKey, AccountUpdate } from 'o1js';

const useProof = false;
const Local = Mina.LocalBlockchain({ proofsEnabled: useProof });
Mina.setActiveInstance(Local);
const { privateKey: deployerKey, publicKey: deployerAccount } =
  Local.testAccounts[0];
const { privateKey: senderKey, publicKey: senderAccount } =
  Local.testAccounts[1];

const zkAppPrivateKey = PrivateKey.random();
const zkAppAddress = zkAppPrivateKey.toPublicKey();

const zkAppInstance = new MinaMap(zkAppAddress);

const deployTxn = await Mina.transaction(deployerAccount, () => {
  AccountUpdate.fundNewAccount(deployerAccount);
  zkAppInstance.deploy();
});
await deployTxn.sign([deployerKey, zkAppPrivateKey]).send();

// get the initial state of Square after deployment
const num0 = zkAppInstance.countries.get();
console.log('state after init:', num0.toString());

const txn1 = await Mina.transaction(senderAccount, () => {
  zkAppInstance.setCountries(Field(9));
});
await txn1.prove();
await txn1.sign([senderKey]).send();

const num1 = zkAppInstance.countries.get();
console.log('state after txn1:', num1.toString());
