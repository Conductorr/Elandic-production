import * as React from 'react';
import { graphql } from 'gatsby';
import { NotFound } from 'templates/NotFound';

const NotFoundPage = () => {
  return <NotFound />;
};

export default NotFoundPage;

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(
      filter: {
        language: { eq: $language }
        ns: { in: ["common", "layout", "notFound"] }
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
