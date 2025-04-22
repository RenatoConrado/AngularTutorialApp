
/**
 * `Natural` ensures that the value is a natural number (0 or a positive integer).
 *
 * @example `get`
 * new Natural("5").value === 5;
 * // true
 *
 * @example `set`
 * (new Natural(0) = 10) === 10;
 * // true
 */
export class Natural {
  private _value!: number;

  /**
   * @throws {TypeError} If the value is null, undefined, or not a number.
   * @throws {RangeError} If the value is not a positive integer.
   * */
  constructor(value: number | string) {
    this.value = value;
  }

  get value(): number {
    return this._value;
  }

  /**
   * @throws {TypeError} If the new value is null, undefined, or not a number.
   * @throws {RangeError} If the new value is not a positive integer.
   * */
  set value(value: number | string) {
    if (!value && Number(value) !== 0) {
      throw new TypeError(`${this.constructor.name} cannot be null or undefined`);
    }

    value = Number(value);
    if (isNaN(value)) {
      throw new TypeError(`${this.constructor.name} value must be a number, but got ${value}`);
    }
    if (!Number.isInteger(value) || value < 0) {
      throw new RangeError(`${this.constructor.name} value must be a natural number (0 or positive integer), but got ${value}`);
    }

    this._value = value;
  }
}
