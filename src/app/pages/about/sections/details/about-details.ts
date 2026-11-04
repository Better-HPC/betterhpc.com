import { Component } from "@angular/core";

import { Section } from "@layout/section/section";

interface ExpertiseCard {
  icon: string;
  title: string;
  description: string;
}

// Hoisted to module scope so the static content is allocated once rather than per instance
const EXPERTISE_CARDS: readonly ExpertiseCard[] = [
  {
    icon: "fa-cogs",
    title: "Operational Expertise",
    description: "Years of operational experience guiding every architectural detail.",
  },
  {
    icon: "fa-check-circle",
    title: "Quality-Driven",
    description: "Designed and tested for demanding operational environments.",
  },
  {
    icon: "fa-users",
    title: "User Focused",
    description: "Every product built with direct input from HPC admins and users.",
  },
];

/** Company background and expertise cards section. */
@Component({
  selector: "app-about-details",
  imports: [Section],
  templateUrl: "about-details.html",
})
export class AboutDetails {
  protected readonly expertiseCards = EXPERTISE_CARDS;
}
