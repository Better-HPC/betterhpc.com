import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

@Component({
  selector: "app-navbar",
  templateUrl: "navbar.html",
  imports: [CommonModule],
})
export class Navbar {
  isMenuOpen = false;

  navLinks = [
    {label: "Mission", href: "#mission"},
    {label: "About", href: "#about"},
    {label: "Software", href: "#software"},
    {label: "Contact", href: "#contact"}
  ];

  toggleMenu(e: Event) {
    e.stopPropagation();
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }
}
