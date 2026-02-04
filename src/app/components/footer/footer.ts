import { Component } from "@angular/core";

/** Page footer containing the company name and copyright. */
@Component({
  selector: "app-footer",
  templateUrl: "footer.html",
})
export class Footer {
  protected currentYear = new Date().getFullYear();
}
