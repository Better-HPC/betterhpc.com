import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";

import { FooterComponent } from "./footer/footer";
import { Navbar } from "./navbar/navbar";

/**
 * Layout component that wraps page content with a navbar and footer.
 * Child pages render via the router outlet.
 */
@Component({
  selector: "app-layout",
  imports: [RouterOutlet, Navbar, FooterComponent],
  template: `
    <div class="min-h-screen flex flex-col">
      <app-navbar/>
      <main class="flex-1">
        <router-outlet/>
      </main>
      <app-footer/>
    </div>
  `,
})
export class LayoutComponent {}
