import { Routes } from "@angular/router";
import { Layout } from "./layout/layout";

export const routes: Routes = [
  {
    path: "",
    component: Layout,
    children: [
      {
        path: "",
        loadComponent: () => import("./pages/about/about").then(m => m.AboutPage),
      }, {
        path: "keystone",
        loadComponent: () => import("./pages/keystone/keystone").then(m => m.KeystonePage),
      }, {
        path: "contact",
        loadComponent: () => import("./pages/contact/contact").then(m => m.ContactPage),
      }, {
        path: "thanks",
        loadComponent: () => import("./pages/confirmation/confirmation").then(m => m.ConfirmationPage),
      },
    ],
  },
];
