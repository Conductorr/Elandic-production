import React, { memo } from 'react';
import { graphql } from 'gatsby';
import Privacy from 'templates/Privacy';

function Contact(): JSX.Element {
  return <Privacy />;
}

export default memo(Contact);

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(
      filter: {
        language: { eq: $language }
        ns: { in: ["common", "layout", "privacy"] }
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
