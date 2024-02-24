const path = require('path');

const buildEslintCommand = (filenames) => [
  `next lint --fix --file ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(' --file ')}`,
  `npm run format:fix ${filenames.join(' ')}`,
];

module.exports = {
  '*.{js,jsx,ts,tsx}': [buildEslintCommand],
};
