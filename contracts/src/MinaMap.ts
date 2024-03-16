import {
  Field,
  Bool,
  SmartContract,
  state,
  State,
  method,
  Provable,
  UInt8,
} from 'o1js';

/**
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
