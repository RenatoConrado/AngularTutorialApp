import { ID } from "../classes/id";
import { Natural } from "../classes/natural";

export interface HousingLocation {
  id: ID;
  name: string;
  city: string;
  state: string;
  photo: string;
  availableUnits: Natural;
  wifi: boolean;
  laundry: boolean;
}

export interface HouseResponse extends Omit<HousingLocation, "id" | "availableUnits"> {
  id: string | number;
  availableUnits: string | number;
}
