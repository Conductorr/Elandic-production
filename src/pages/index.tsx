import React, { memo } from 'react';
import { graphql } from 'gatsby';
import { MainPage } from '../templates/MainPage';

const IndexPage = () => {
  return (
    <>
      <MainPage />
    </>
  );
};

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(
      filter: {
        language: { eq: $language }
        ns: { in: ["mainPage", "common", "layout"] }
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

export default memo(IndexPage);
