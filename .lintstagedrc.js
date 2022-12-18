const micromatch = require('micromatch');

module.exports = {
  // Lint & Prettify JS & JSX files
  '**/*.(js|jsx)': (filenames) => {
    const match = micromatch.not(filenames, ['*.eslintrc.js', '*.lintstagedrc.js', '*.{config.js,config.ts}']);
    return [`eslint --fix ${match.join(' ')}`, `npx prettier --write ${match.join(' ')}`];
  },

  // Prettify only Markdown and JSON files apart from package.json and package-lock.json
  '**/*.(md|json)': (filenames) => {
    const match = micromatch.not(filenames, ['*package.json', '*package-lock.json']);
    return `npx prettier --write ${match.join(' ')}`;
  },
};
