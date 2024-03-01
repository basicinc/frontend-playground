import { expect, test } from 'vitest';

import { formatYYYYMMDDHHMMSS } from '@/utils/date';

test('formatYYYYMMDDHHMMSS', () => {
  expect(formatYYYYMMDDHHMMSS(new Date(2021, 0, 1, 9, 0, 0))).toBe('2021/01/01 09:00:00');
});
