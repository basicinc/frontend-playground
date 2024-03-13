/**
 * fomrunから引用
 * ユーザーのブラウザの言語設定を取得する
 * @returns 'ja' or 'en'
 */
export const getUserLocale = () => {
  const lang =
    (window.navigator.languages && window.navigator.languages[0]) || // Chrome49の挙動調整 Accept-Language HTTP Header を優先
    window.navigator.language || // IE を除くブラウザのブラウザ言語設定
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window.navigator as any).userLanguage || // IE11 対応
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window.navigator as any).browserLanguage; // IE11 未満対応

  return lang && lang.split('-')[0] === 'ja' ? 'ja' : 'en';
};
