import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { SectionComponent } from "../../../../layout/section/section";

/** Contact form section with dark hero-style background. */
@Component({
  selector: "app-contact-form",
  imports: [FormsModule, SectionComponent],
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
