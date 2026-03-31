import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { SectionComponent } from "../section/section";

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

  protected onSubmit() {
    console.log("Form submitted:", this.formData);
  }
}
