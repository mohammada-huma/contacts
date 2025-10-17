import { StandaloneApp } from '@huma-engineering/app-kit';

/** Contacts's Main Application Class */
export class ContactsApp extends StandaloneApp {
  override readonly id = 'PORTAL_CONTACTS';

  override readonly name = 'Contacts portal';

  override readonly description = 'Sample description';

  override readonly routingConfig = {
    prefix: 'portal-contacts',
    routeLoader: () =>
      import('./portal-contacts.routes').then((r) => r.PORTAL_ROUTES),
  };

  /** @inheritdoc */
  override hasAccess(): boolean {
    return true;
  }
}
