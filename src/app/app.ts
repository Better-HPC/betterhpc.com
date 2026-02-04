import { Component } from "@angular/core";

import { About } from "./components/about/about";
import { contact } from "./components/contact/contact";
import { Footer } from "./components/footer/footer";
import { Hero } from "./components/hero/hero";
import { Mission } from "./components/mission/mission";
import { Navbar } from "./components/navbar/navbar";
import { Software } from "./components/software/software";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [
    Navbar,
    Hero,
    Mission,
    About,
    Software,
    contact,
    Footer
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
