import {Natural} from "./natural";

/**
 * `ID` Ensures that the value is a positive integer.
 * @example `get`
 * new ID("5").value === 5;
 * // true
 * @example `set`
 * (new ID(0).value = 10) === 10
 * // true
 */
export class ID extends Natural {
}
