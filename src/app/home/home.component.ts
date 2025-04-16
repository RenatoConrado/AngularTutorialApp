import { Component } from "@angular/core";

import { HousingLocationComponent } from "../housing-location/housing-location.component";
import { Housinglocation } from "../housinglocation";

@Component({
  selector: "app-home",
  imports: [HousingLocationComponent],
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.scss",
})
export class HomeComponent {
  public readonly baseUrl = "https://angular.dev/assets/images/tutorials/common";
  public housingLocation: Housinglocation = {
    id: 9999,
    name: "Test Home",
    city: "Test city",
    state: "ST",
    photo: `${this.baseUrl}/example-house.jpg`,
    availableUnits: 99,
    wifi: true,
    laundry: false,
  };
}
