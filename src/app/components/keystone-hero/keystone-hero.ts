import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";

/**
 * Hero section for the Keystone product page with headline,
 * call-to-action buttons, and a dashboard preview mockup.
 */
@Component({
  selector: "app-keystone-hero",
  imports: [RouterLink],
  templateUrl: "keystone-hero.html",
})
export class KeystoneHero {
  protected dashboardStats = [
    { value: "21,000", label: "Funded Projects" },
    { value: "1,247", label: "Active Jobs" },
    { value: "315", label: "Nodes Online" },
  ];
}
