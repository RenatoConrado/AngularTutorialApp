import {Component} from "@angular/core";
import {RouterModule, RouterOutlet} from "@angular/router";
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: "app-root",
  imports: [RouterOutlet, RouterModule, NgOptimizedImage],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
})
export class AppComponent {
  title = "tutorial";
}
