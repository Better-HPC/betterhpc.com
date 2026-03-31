import { Routes } from "@angular/router";
import { LayoutComponent } from "./layouts/nav-layout";

export const routes: Routes = [
  {
    path: "",
    component: LayoutComponent,
    children: [
      {
        path: "",
        loadComponent: () => import("./pages/about").then(m => m.AboutPage),
      }, {
        path: "keystone",
        loadComponent: () => import("./pages/keystone").then(m => m.KeystonePage),
      }, {
        path: "contact",
        loadComponent: () => import("./pages/contact").then(m => m.ContactPage),
      },
    ],
  },
];
