import { Component, inject } from "@angular/core";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { HousingService } from "../services/housing.service";
import { NgOptimizedImage } from "@angular/common";
import { ID } from "../classes/id";
import { HouseLocation } from "../classes/house-location";

@Component({
  selector: "app-details",
  imports: [NgOptimizedImage, ReactiveFormsModule],
  templateUrl: "./details.component.html",
  styleUrl: "./details.component.scss",
})
export class DetailsComponent {
  private route: ActivatedRoute = inject(ActivatedRoute);
  private housingService: HousingService = inject(HousingService);
  house: HouseLocation | undefined;
  applyForm = new FormGroup({
    firstName: new FormControl("", Validators.required),
    lastName: new FormControl("", Validators.required),
    email: new FormControl("", [Validators.required, Validators.email]),
  });

  constructor() {
    const pageId = new ID(this.route.snapshot.params["id"]);
    this.housingService.getHouseById(pageId).then((house) => {
      this.house = house;
    });
  }

  submitApplication(): void {
    this.housingService.submitApplication({
      firstName: this.applyForm.value.firstName!,
      lastName: this.applyForm.value.lastName!,
      email: this.applyForm.value.email!,
    });
  }
}
