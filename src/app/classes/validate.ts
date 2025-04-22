/**
 * Validate {@link string `string`} and {@link boolean `boolean`}
 * @example `string()`
 * Validate.string("text ") === "text"
 * @example `boolean()`
 * Validate.boolean("true") === true
 * */
export class Validate {
  /** @throws {TypeError} if it's not a string */
  static string(value: string): string {
    if (typeof value !== "string") {
      throw new TypeError(`Expected a string, but got ${value}`);
    }
    value = value.trim();
    return value;
  }

  /** @throws {TypeError} If the string is not possible convert */
  static boolean(value: string | boolean): boolean{
    if (typeof value === "boolean") {
      return value;
    }

    value = this.string(value).toLowerCase();
    if (value !== "true" && value !== "false") {
      throw new TypeError(`Expected a boolean, but got ${value}`);
    }
    return Boolean(value);
  }
}
