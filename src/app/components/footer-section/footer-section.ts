import { Component } from '@angular/core';

@Component({
  selector: 'app-footer-section',
  templateUrl: 'footer-section.html',
})
export class FooterSection {
  currentYear = new Date().getFullYear();
}
