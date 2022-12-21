import React, { memo, useState, useCallback } from 'react';
import { graphql, PageProps } from 'gatsby';
import useSWR from 'swr';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import {
  vimeoFetchInstance,
  TypeVimeoAlbumsVideosResult,
  TypeVideo,
} from 'apiRest/vimeo';
import { Link } from 'modules';
import { WorkItem, WorkItemSkeleton } from 'components/WorkItem';
import * as styles from './Works.module.scss';
import WorkMoral from './WorkModal';

type TypeWorksContext = {
  pathName: string;
  title: string;
  backLink: string;
  showcaseId: number;
};

function Works({
  pageContext,
}: PageProps<unknown, TypeWorksContext>): JSX.Element {
  const [selectedVideo, setSelectedVideo] = useState<TypeVideo | null>(null);

  const { t } = useTranslation();

  const { data, isValidating } = useSWR<TypeVimeoAlbumsVideosResult>(
    `/albums/${pageContext.showcaseId}/videos`,
    vimeoFetchInstance,
  );

  const handleClickItem = useCallback(
    (video: TypeVideo) => {
      if (selectedVideo) {
        return;
      }

      setSelectedVideo(video);
    },
    [selectedVideo],
  );

  const handleCloseSelectedVideo = useCallback(() => {
    setSelectedVideo(null);
  }, []);

  console.log(pageContext);

  return (
    <div className={styles.portfolio}>
      <div className={styles.portfolio__header}>
        <Link
          theme="white"
          arrowDirection="left"
          to={pageContext.backLink}
          className={styles.portfolio__header__button__text}
        >
          {t('common:navigation.back')}
        </Link>

        <h1 className={styles.portfolio__header__title}>
          {t('common:portfolio')}
        </h1>
      </div>
      <div className={styles.navigation}>
        <Link
          className={styles.link}
          to="/leaders/portfolio"
          isDisabled={pageContext.pathName === '/leaders/portfolio'}
          theme="white"
        >
          {t('common:leaders')}
        </Link>
        <Link
          className={styles.link}
          to="/brands/portfolio"
          isDisabled={pageContext.pathName === '/brands/portfolio'}
          theme="white"
        >
          {t('common:brands')}
        </Link>
        <Link
          className={styles.link}
          to="/history/portfolio"
          isDisabled={pageContext.pathName === '/history/portfolio'}
          theme="white"
        >
          {t('common:history')}
        </Link>
      </div>
      <div className={styles.portfolio__main}>
        <div className={styles.portfolio__main__container}>
          {isValidating && Array(12).fill(<WorkItemSkeleton />)}
          {!isValidating &&
            data &&
            data.data.map((video) => (
              <WorkItem
                handleClick={handleClickItem}
                video={video}
                key={video.uri}
              />
            ))}
        </div>
      </div>

      {selectedVideo && (
        <WorkMoral
          selectedVideo={selectedVideo}
          handleCloseSelectedVideo={handleCloseSelectedVideo}
        />
      )}

      {/*<div className={styles.portfolio__footer}>*/}
      {/*<div className={styles.portfolio__footer__button}>*/}
      {/*  <Button*/}
      {/*    className={styles.portfolio__footer__button_more}*/}
      {/*    size="m"*/}
      {/*    theme="white"*/}
      {/*    type="button"*/}
      {/*    to="/portfolio"*/}
      {/*  >*/}
      {/*    {t('common:More')}*/}
      {/*  </Button>*/}
      {/*</div>*/}
      {/*</div>*/}
    </div>
  );
}

export default memo(Works);

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(
      filter: {
        language: { eq: $language }
        ns: { in: ["sections", "common", "layout", "portfolio"] }
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
