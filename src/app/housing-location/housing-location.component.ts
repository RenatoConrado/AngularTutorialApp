import {Component, Input} from "@angular/core";
import {RouterLink} from "@angular/router";
import { HouseLocation } from "../classes/house-location";

@Component({
  selector: "app-housing-location",
  imports: [RouterLink],
  templateUrl: "./housing-location.component.html",
  styleUrl: "./housing-location.component.scss",
})
export class HousingLocationComponent {
  @Input() housingLocation!: HouseLocation;
}
