import React, { memo } from 'react';
import { graphql } from 'gatsby';
import { AboutUs } from 'templates/AboutUs';

function About(): JSX.Element {
  return <AboutUs />;
}

export default memo(About);

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(
      filter: {
        language: { eq: $language }
        ns: { in: ["aboutUs", "common", "layout"] }
      }
    ) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;
