import 'i18next';
import type { resources } from '@/i18n/config';

declare module 'i18next' {
  interface CustomTypeOptions {
    // TODO: namespaceの区切り方を決める
    resources: (typeof resources)['ja'];
  }
}
