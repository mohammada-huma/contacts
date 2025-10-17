import { createStandaloneAppProvider } from '@huma-engineering/app-kit';
import { ContactsApp } from './portal-contacts.app';

/**
 * Provides the Contacts as a standalone application.
 */
export const includingContacts = createStandaloneAppProvider(ContactsApp);
