import {
  bootstrapStandaloneApps,
  type ProvidableApp,
  withShellEnvironment,
} from '@huma-engineering/app-kit';
import { includingContacts } from '@huma-engineering/portal-contacts/app';
import { environment } from './environments/environment.development';

const apps: ProvidableApp[] = [includingContacts()];

export const standaloneApps = bootstrapStandaloneApps(
  withShellEnvironment({
    hostUrl: environment.HOST_URL,
  }),
  ...apps,
);
