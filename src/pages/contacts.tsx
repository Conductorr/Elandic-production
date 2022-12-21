import React, { memo } from 'react';
import { graphql } from 'gatsby';
import { Contacts } from 'templates/Contacts';

function Contact(): JSX.Element {
  return <Contacts />;
}

export default memo(Contact);

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
