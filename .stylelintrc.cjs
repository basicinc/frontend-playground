module.exports = {
  extends: ['stylelint-config-standard'],
  plugins: ['stylelint-plugin-defensive-css', 'stylelint-plugin-logical-css'],
  reportDescriptionlessDisables: true,
  reportInvalidScopeDisables: true,
  reportNeedlessDisables: true,
  cache: true,
  rules: {
    'unit-allowed-list': ['%', 'rem', 'ms'],
    'import-notation': 'string',
  },
  ignoreFiles: ['src/styles/reset.css', 'src/stories/**'],
};
