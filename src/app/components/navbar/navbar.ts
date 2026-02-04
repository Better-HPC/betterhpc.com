import { CommonModule } from "@angular/common";
import { Component, ElementRef, HostListener, viewChild } from "@angular/core";

@Component({
  selector: "app-navbar",
  templateUrl: "navbar.html",
  imports: [CommonModule],
})
export class Navbar {
  protected isMenuOpen = false;

  protected mobileMenu = viewChild<ElementRef>("mobileMenu");
  protected menuToggle = viewChild<ElementRef>("menuToggle");

  protected navLinks = [
    {label: "Mission", href: "#mission"},
    {label: "About", href: "#about"},
    {label: "Software", href: "#software"},
  ];

  /**
   * Close mobile menu when clicking outside of it.
   * Ignores clicks on the menu itself or the toggle button.
   */
  @HostListener("document:click", ["$event"])
  protected handleOutsideClick(e: Event) {
    if (!this.isMenuOpen) return;

    const clickedToggle = this.menuToggle()?.nativeElement.contains(e.target);
    const clickedMenu = this.mobileMenu()?.nativeElement.contains(e.target);

    if (!clickedToggle && !clickedMenu) {
      this.closeMenu();
    }
  }

  /** Toggle the mobile menu open/closed state. */
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  /** Close the mobile menu. */
  closeMenu() {
    this.isMenuOpen = false;
  }
}
