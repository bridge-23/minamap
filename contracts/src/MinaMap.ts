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

  @method setCountries(newCountries: Field): void {
    this.countries.getAndRequireEquals();
    this.countries.set(newCountries);
  }
}
