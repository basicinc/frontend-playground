import { format } from '@formkit/tempo';

/**
 * 日付をYYYY/MM/DD HH:mm:ss形式にフォーマットして返す
 * @example formatYYYYMMDDHHMMSS(new Date(2021, 0, 1, 9, 0, 0)) -> '2021/01/01 09:00:00'
 */
export const formatYYYYMMDDHHMMSS = (date: Date) => {
  return format(date, 'YYYY/MM/DD HH:mm:ss');
};
