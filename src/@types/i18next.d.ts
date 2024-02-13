import 'i18next';
import type ja from '@/i18n/ja.json';

declare module 'i18next' {
  interface CustomTypeOptions {
    // TODO: namespaceの区切り方を決める
    defaultNS: 'ns1';
    resources: {
      ns1: typeof ja;
    };
  }
}
