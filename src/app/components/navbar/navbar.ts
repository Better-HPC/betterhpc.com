import { CommonModule } from "@angular/common";
import { Component, ElementRef, HostListener, viewChild } from "@angular/core";
import { RouterLink, RouterLinkActive } from "@angular/router";

interface NavLink {
  label: string;
  route: string;
}

/** Navigation bar with responsive mobile support and Angular Router integration. */
@Component({
  selector: "app-navbar",
  templateUrl: "navbar.html",
  imports: [CommonModule, RouterLink, RouterLinkActive],
})
export class Navbar {
  protected mobileMenu = viewChild<ElementRef>("mobileMenu");
  protected menuToggle = viewChild<ElementRef>("menuToggle");

  protected isMenuOpen = false;

  protected navLinks: NavLink[] = [
    { label: "About", route: "/" },
    { label: "Keystone", route: "/keystone" },
  ];

  @HostListener("document:click", ["$event"])
  protected handleOutsideClick(e: Event) {
    if (!this.isMenuOpen) return;
    const clickedToggle = this.menuToggle()?.nativeElement.contains(e.target);
    const clickedMenu = this.mobileMenu()?.nativeElement.contains(e.target);
    if (!clickedToggle && !clickedMenu) {
      this.closeMenu();
    }
  }

  protected toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  protected closeMenu() {
    this.isMenuOpen = false;
  }
}
