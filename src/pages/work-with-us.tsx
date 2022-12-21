import React, { memo } from 'react';
import { graphql } from 'gatsby';
import { WorkWithUs } from 'templates/WorkWithUs';

function WorkWithUsPage(): JSX.Element {
  return <WorkWithUs />;
}

export default memo(WorkWithUsPage);

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(
      filter: {
        language: { eq: $language }
        ns: { in: ["workWithUs", "common", "layout"] }
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
