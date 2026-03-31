import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";

import { FooterComponent } from "../components/footer/footer";
import { Navbar } from "../components/navbar/navbar";

/**
 * Root layout component that wraps all pages with a consistent
 * navbar and footer. Child pages render via the router outlet.
 */
@Component({
  selector: "app-layout",
  imports: [RouterOutlet, Navbar, FooterComponent],
  template: `
    <app-navbar/>
    <main>
      <router-outlet/>
    </main>
    <app-footer/>
  `,
})
export class LayoutComponent {}
