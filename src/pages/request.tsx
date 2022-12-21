import React, { memo } from 'react';
import { CoomigSoon } from 'modules';
import { graphql } from 'gatsby';

function Request(): JSX.Element {
  return <CoomigSoon />;
}

export default memo(Request);

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(
      filter: { language: { eq: $language }, ns: { in: ["common", "layout"] } }
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
