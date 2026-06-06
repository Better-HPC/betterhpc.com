import { Component } from "@angular/core";

import { AboutDetails } from "./sections/details/about-details";
import { AboutHero } from "./sections/hero/about-hero";
import { AboutMission } from "./sections/mission/about-mission";
import { AboutSoftware } from "./sections/software/about-software";

/** Landing page introducing Better HPC and its mission. */
@Component({
  selector: "app-about-page",
  imports: [AboutHero, AboutMission, AboutDetails, AboutSoftware],
  template: `
    <app-about-hero/>
    <app-about-mission/>
    <app-about-details/>
    <app-about-software/>
  `,
})
export class AboutPage {}
