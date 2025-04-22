import { Injectable } from "@angular/core";
import type { HousingLocation, HouseResponse } from "../interfaces/housingLocation";
import type { Application } from "../interfaces/application";
import { ID } from "../classes/id";
import { HouseLocation } from "../classes/house-location";

@Injectable({ providedIn: "root" })
export class HousingService {
  private readonly url = "http://localhost:3000/locations";

  async getHousesList(): Promise<HouseLocation[]> {
    const response = await fetch(this.url);
    if (!response.ok) throw new Error(response.statusText);

    const data: HouseResponse[] = await response.json();

    return data.map((house) => new HouseLocation(house));
  }

  async getHouseById(id: ID): Promise<HouseLocation | undefined> {
    const response = await fetch(this.url + "?id=" + id.value);
    if (!response.ok) throw new Error(response.statusText);

    const data: [HouseResponse] = await response.json();

    return new HouseLocation(data[0]);
  }

  submitApplication(application: Application): void {
    console.log(
      `Home Application Received
      Name: ${application.firstName} ${application.lastName};
      Email: ${application.email};`,
    );
  }
}
