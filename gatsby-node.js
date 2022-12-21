// eslint-disable-next-line import/extensions,@typescript-eslint/no-var-requires
const { sections } = require('./src/generatedPagesData/sections.ts');
// eslint-disable-next-line import/extensions,@typescript-eslint/no-var-requires
const { portfolios } = require('./src/generatedPagesData/portfolios.ts');

exports.createPages = ({ actions }) => {
  const { createPage } = actions;

  sections.forEach((section) => {
    createPage({
      path: section.pathName,
      component: require.resolve('./src/templates/Section/Section.tsx'),
      context: section,
    });
  });

  portfolios.forEach((portfolio) => {
    createPage({
      path: portfolio.pathName,
      component: require.resolve('./src/templates/Works/Works.tsx'),
      context: portfolio,
    });
  });
};
