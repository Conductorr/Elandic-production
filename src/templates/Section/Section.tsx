import React, { memo } from 'react';
import { graphql, PageProps } from 'gatsby';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { Link, Button, Icon } from 'modules';
import { separatorWhite } from 'assets/svg';
import * as styles from './Section.module.scss';

type TypeSectionContext = {
  pathName: string;
  firstLink: string;
  secondLink: string;
  firstLinkTitle: string;
  secondLinkTitle: string;
  title: string;
  worksLink: string;
  video: string;
};

function Section({
  pageContext,
}: PageProps<unknown, TypeSectionContext>): JSX.Element {
  const { t } = useTranslation();

  return (
    <div className={styles.wrapper}>
      <video
        className={styles.video}
        height="100%"
        width="100%"
        loop
        muted
        autoPlay
        playsInline
      >
        <source src={pageContext.video} type="video/mp4" />
      </video>

      <div className={styles.section}>
        <div className={styles.content}>
          <div className={styles.content__upper}>
            <div className={styles.links}>
              <Link
                className={styles.links__item}
                theme="white"
                to={pageContext.firstLink}
              >
                {t(pageContext.firstLinkTitle)}
              </Link>
              <Icon
                path={separatorWhite.path}
                viewBox={separatorWhite.viewBox}
                className={styles.links__separator}
              />
              <Link
                className={styles.links__item}
                theme="white"
                to={pageContext.secondLink}
              >
                {t(pageContext.secondLinkTitle)}
              </Link>
            </div>
          </div>
          <div className={styles.content__bottom}>
            <div className={styles.title}>{t(pageContext.title)}</div>
            <Button
              className={styles.button}
              hasArrow
              size="m"
              theme="white"
              to={pageContext.worksLink}
            >
              {t('section:button')}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(Section);

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(
      filter: {
        language: { eq: $language }
        ns: { in: ["sections", "common", "layout"] }
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
