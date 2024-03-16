import {
  Field,
  Bool,
  SmartContract,
  state,
  State,
  method,
  Provable,
  Poseidon,
  UInt8,
} from 'o1js';

/**
 * Basic Example
 * See https://docs.minaprotocol.com/zkapps for more info.
 *
 * The Add contract initializes the state variable 'num' to be a Field(1) value by default when deployed.
 * When the 'update' method is called, the Add contract adds Field(2) to its 'num' contract state.
 *
 * This file is safe to delete and replace with your own contract.
 */
export class MinaMap extends SmartContract {
  @state(Field) countries = State<Field>();

  init() {
    super.init();
    this.countries.set(Field(0));
  }

  @method setVisited(countryId: UInt8): void {
    const countries = this.countries.get();
    this.countries.requireEquals(countries);

    let countryBits = this.countries.get().toBits(200);

    Provable.asProver(() => {
      countryBits[countryId.toNumber()] = Bool(true);
    });

    this.countries.set(Field.fromBits(countryBits));
  }
}
