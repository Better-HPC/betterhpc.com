import { Component } from "@angular/core";

import { AboutDetails } from "../components/about-details/about-details";
import { AboutHero } from "../components/about-hero/about-hero";
import { Mission } from "../components/mission/mission";
import { SoftwarePreview } from "../components/software-preview/software-preview";

/** Landing page introducing Better HPC and its mission. */
@Component({
  selector: "app-about-page",
  imports: [AboutHero, Mission, AboutDetails, SoftwarePreview],
  template: `
    <app-about-hero />
    <app-mission />
    <app-about-details />
    <app-software-preview />
  `,
})
export class AboutPage {}
