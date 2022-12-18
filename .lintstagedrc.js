const micromatch = require('micromatch');

module.exports = {
  // Lint & Prettify JS & JSX files
  '**/*.(js|jsx)': (filenames) => [
    `eslint --fix ${filenames.join(' ')}`,
    `npx prettier --write ${filenames.join(' ')}`,
  ],

  // Prettify only Markdown and JSON files
  '**/*.(md|json)': (filenames) => {
    const match = micromatch.not(filenames, ['*package.json', '*package-lock.json']);
    return `npx prettier --write ${match.join(' ')}`;
  },
};
