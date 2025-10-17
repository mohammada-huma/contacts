import { Routes } from '@angular/router';
import { languageLoader } from '@huma-engineering/portal-contacts/i18n';
import { provideTranslationScope } from '@huma-engineering/tool-kit/i18n';

export const PORTAL_ROUTES: Routes = [
  {
    path: 'main',
    providers: [provideTranslationScope('contacts', languageLoader())],
    loadComponent: () =>
      import('./portal-contacts.component').then((c) => c.Contacts),
    children: [],
  },
  {
    path: '**',
    redirectTo: 'main',
  },
];
