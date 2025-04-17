import { Component, inject } from "@angular/core";
import { HousingLocationComponent } from "../housing-location/housing-location.component";
import { HousingService } from "../housing.service";
import type { Housinglocation } from "../housinglocation";

@Component({
  selector: "app-home",
  imports: [HousingLocationComponent],
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.scss",
})
export class HomeComponent {
  housesList: Housinglocation[] = [];
  housingService: HousingService = inject(HousingService);
  constructor() {
    this.housesList = this.housingService.housesList;
  }
}
