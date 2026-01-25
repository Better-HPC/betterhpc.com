import { Component } from "@angular/core";

import { AboutComponent } from "./components/about/about";
import { ContactComponent } from "./components/contact/contact";
import { FooterComponent } from "./components/footer/footer";
import { HeroComponent } from "./components/hero/hero";
import { MissionComponent } from "./components/mission/mission";
import { NavbarComponent } from "./components/navbar/navbar";
import { SoftwareComponent } from "./components/software/software";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [
    NavbarComponent,
    HeroComponent,
    MissionComponent,
    AboutComponent,
    SoftwareComponent,
    ContactComponent,
    FooterComponent
  ],
  template: `
    <app-navbar/>
    <app-hero/>
    <app-mission/>
    <app-about/>
    <app-software/>
    <app-contact/>
    <app-footer/>
  `
})
export class App {}
