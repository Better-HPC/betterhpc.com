import { Component, ElementRef, HostListener, signal, viewChild } from "@angular/core";
import { RouterLink, RouterLinkActive } from "@angular/router";

interface NavLink {
  label: string;
  route: string;
}

// Hoisted to module scope so the links are allocated once rather than per instance
const MENU_CONTENT: readonly NavLink[] = [
  {label: "About", route: "/"},
  {label: "Keystone", route: "/keystone"},
];

/** Navigation bar with responsive mobile support and Angular Router integration. */
@Component({
  selector: "app-navbar",
  templateUrl: "navbar.html",
  imports: [RouterLink, RouterLinkActive],
})
export class Navbar {
  protected readonly mobileMenu = viewChild<ElementRef>("mobileMenu");
  protected readonly menuToggle = viewChild<ElementRef>("menuToggle");

  protected readonly menuContent = MENU_CONTENT;

  protected readonly isMenuOpen = signal(false);

  /**
   * Close the mobile menu when a click occurs outside the menu or toggle elements.
   *
   * @param e The native DOM click event.
   */
  @HostListener("document:click", ["$event"])
  protected handleOutsideClick(e: Event): void {
    if (!this.isMenuOpen()) return;
    const clickedToggle = this.menuToggle()?.nativeElement.contains(e.target);
    const clickedMenu = this.mobileMenu()?.nativeElement.contains(e.target);
    if (!clickedToggle && !clickedMenu) {
      this.closeMenu();
    }
  }

  /** Toggle the mobile menu open or closed. */
  protected toggleMenu(): void {
    this.isMenuOpen.update(open => !open);
  }

  /** Close the mobile menu. */
  protected closeMenu(): void {
    this.isMenuOpen.set(false);
  }
}
