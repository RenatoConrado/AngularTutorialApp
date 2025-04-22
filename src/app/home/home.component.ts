import { Component, inject } from "@angular/core";
import { HousingLocationComponent } from "../housing-location/housing-location.component";
import { HousingService } from "../services/housing.service";
import type { HousingLocation } from "../interfaces/housingLocation";
import { HouseLocation } from "../classes/house-location";
import { join } from "@angular/compiler-cli";

@Component({
  selector: "app-home",
  imports: [HousingLocationComponent],
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.scss",
})
export class HomeComponent {
  private housingService: HousingService = inject(HousingService);
  housesList?: HouseLocation[];
  filteredHousesList: typeof this.housesList;

  constructor() {
    this.housingService.getHousesList().then((house) => {
      this.housesList = house;
      this.filteredHousesList = house;
    });
  }

  filterHouses(input: string): void {
    if (!this.housesList) return;

    if (!input) {
      this.filteredHousesList = this.housesList;
      return;
    }

    this.filteredHousesList = this.housesList.filter((house: HousingLocation) => {
      const toSearch = [house.name ,house.city, house.state].join(" ");
      return toSearch.toLowerCase().includes(input.toLowerCase());
    });
  }
}
