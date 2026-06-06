import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";

/** Site-wide footer with company branding and copyright. */
@Component({
  selector: "app-footer",
  templateUrl: "footer.html",
  imports: [RouterLink],
})
export class FooterComponent {
  protected currentYear = new Date().getFullYear();
}
