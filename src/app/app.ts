import { Component } from "@angular/core";

import { AboutSection } from "./components/about-section/about-section";
import { contactSection } from "./components/contact-section/contact-section";
import { Footer } from "./components/footer/footer";
import { HeroSection } from "./components/hero-section/hero-section";
import { MissionSection } from "./components/mission-section/mission-section";
import { Navbar } from "./components/navbar/navbar";
import { SoftwareSection } from "./components/software-section/software-section";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [
    Navbar,
    HeroSection,
    MissionSection,
    AboutSection,
    SoftwareSection,
    contactSection,
    Footer
  ],
  template: `
    <app-navbar/>
    <app-hero-section/>
    <app-mission-section/>
    <app-about-section/>
    <app-software-section/>
    <app-contact-section/>
    <app-footer/>
  `
})
export class App {}
