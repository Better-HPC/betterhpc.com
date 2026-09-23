import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";
import { Section } from "@layout/section/section";

/** Email sent confirmation page. */
@Component({
  selector: "app-confirmation-page",
  imports: [
    Section,
    RouterLink
  ],
  templateUrl: "confirmation.html",
})
export class ConfirmationPage {}
