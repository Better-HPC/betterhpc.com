import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar-section',
  imports: [CommonModule],
  templateUrl: 'navbar-section.html',
})
export class NavbarSection {
  isMenuOpen = false;

  navLinks = [
    { label: 'Mission', href: '#mission' },
    { label: 'About', href: '#about' },
    { label: 'Software', href: '#software' },
    { label: 'Contact', href: '#contact' }
  ];

  toggleMenu(e: Event) {
    e.stopPropagation();
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }
}
