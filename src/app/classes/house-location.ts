import { HouseResponse } from "../interfaces/housingLocation";
import { ID } from "./id";
import { Natural } from "./natural";
import { Validate } from "./validate";

/** ### Represents a `House Location` that converts and validate itSelf.*/
export class HouseLocation {
  private _id!: ID;
  private _name!: string;
  private _city!: string;
  private _state!: string;
  private _photo!: string;
  private _availableUnits!: Natural;
  private _wifi!: boolean;
  private _laundry!: boolean;

  /**
   *
   * @throws {TypeError} If an `prop` has invalid Type.
   * @throws {RangeError} If an `prop` has a negative number.
   * */
  constructor(data: HouseResponse) {
    this.id = data.id;
    this.name = data.name;
    this.city = data.city;
    this.state = data.state;
    this.photo = data.photo;
    this.availableUnits = data.availableUnits;
    this.wifi = data.wifi;
    this.laundry = data.laundry;
  }

  set id(id: string | number) {
    this._id = new ID(id);
  }

  set name(name: string) {
    this._name = Validate.string(name);
  }

  set city(city: string) {
    this._city = Validate.string(city);
  }

  set state(state: string) {
    this._state = Validate.string(state);
  }

  set photo(photo: string) {
    this._photo = Validate.string(photo);
  }

  set availableUnits(availableUnits: string | number) {
    this._availableUnits = new Natural(availableUnits);
  }

  set wifi(wifi: string | boolean) {
    this._wifi = Validate.boolean(wifi);
  }

  set laundry(laundry: string | boolean) {
    this._laundry = Validate.boolean(laundry);
  }

  get id(): ID {
    return this._id;
  }

  get name(): string {
    return this._name;
  }

  get city(): string {
    return this._city;
  }

  get state(): string {
    return this._state;
  }

  get photo(): string {
    return this._photo;
  }

  get availableUnits(): Natural {
    return this._availableUnits;
  }

  get wifi(): boolean {
    return this._wifi;
  }

  get laundry(): boolean {
    return this._laundry;
  }
}
