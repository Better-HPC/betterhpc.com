import { Component } from "@angular/core";
import { Section } from "@layout/section/section";

/** Contact form section with dark hero-style background. */
@Component({
  selector: "app-contact-form",
  imports: [Section],
  templateUrl: "contact-form.html",
})
export class ContactForm {
  protected formData = {
    name: "",
    email: "",
    institution: "",
    message: "",
  };

  /** Log the current form data to the console on submission. */
  protected onSubmit() {
    console.log("Form submitted:", this.formData);
  }
}
