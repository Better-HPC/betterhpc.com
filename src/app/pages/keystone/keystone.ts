import { Component } from "@angular/core";
import { KeystoneFaq } from "./sections/faq/keystone-faq";
import { KeystoneFeatures } from "./sections/features/keystone-features";

import { KeystoneHero } from "./sections/hero/keystone-hero";
import { KeystoneHighlights } from "./sections/highlights/keystone-highlights";

/** Product page for the Keystone HPC platform. */
@Component({
  selector: "app-keystone-page",
  imports: [KeystoneHero, KeystoneHighlights, KeystoneFeatures, KeystoneFaq],
  template: `
    <app-keystone-hero/>
    <app-keystone-highlights/>
    <app-keystone-features/>
    <app-keystone-faq/>
  `,
})
export class KeystonePage {}
