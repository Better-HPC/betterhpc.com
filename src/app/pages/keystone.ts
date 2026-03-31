import { Component } from "@angular/core";

import { KeystoneHero } from "../components/keystone-hero/keystone-hero";
import { Highlights } from "../components/highlights/highlights";
import { Features } from "../components/features/features";
import { Faq } from "../components/faq/faq";

/** Product page for the Keystone HPC platform. */
@Component({
  selector: "app-keystone-page",
  imports: [KeystoneHero, Highlights, Features, Faq],
  template: `
    <app-keystone-hero />
    <app-highlights />
    <app-features />
    <app-faq />
  `,
})
export class KeystonePage {}
