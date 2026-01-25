import { Component } from "@angular/core";

import { AboutSection } from "./components/about-section/about-section";
import { contactSection } from "./components/contact-section/contact-section";
import { FooterSection } from "./components/footer-section/footer-section";
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
    FooterSection
  ],
  template: `
    <app-navbar/>
    <app-hero-section/>
    <app-mission-section/>
    <app-about-section/>
    <app-software-section/>
    <app-contact-section/>
    <app-footer-section/>
  `
})
export class App {}
