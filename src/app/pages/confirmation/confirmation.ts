import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";
import { SectionComponent } from "../../layout/section/section";

/** Email sent confirmation page. */
@Component({
  selector: "app-confirmation-page",
  imports: [
    SectionComponent,
    RouterLink
  ],
  templateUrl: "confirmation.html",
})
export class ConfirmationPage {}
