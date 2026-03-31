import { Component } from "@angular/core";

import { ContactForm } from "../components/contact-form/contact-form";

/** Standalone contact page. */
@Component({
  selector: "app-contact-page",
  imports: [ContactForm],
  template: `<app-contact-form />`,
})
export class ContactPage {}
