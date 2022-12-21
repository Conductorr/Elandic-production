import React, { memo } from 'react';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { Icon, Link } from 'modules';
import { separator, arrowBrackets } from 'assets/svg';
import * as styles from './MainPageBrands.module.scss';

function MainPageBrands(): JSX.Element {
  const { t } = useTranslation();

  return (
    <div className={styles.wrapper}>
      <div className={styles.brands}>
        <div className={styles.brands__container}>
          <div className={styles.brands__container__content}>
            <div className={styles.brands__container__content__heading}>
              <Icon
                path={arrowBrackets.path}
                viewBox={arrowBrackets.viewBox}
                className={styles.brands__container__content__arrowIcon}
              />
              <p className={styles.brands__container__content__caption}>
                {t('mainPage:brandsCaption')}
              </p>
            </div>
            <video
              className={styles.brands__container__content__video}
              muted
              loop
              autoPlay
              playsInline
            >
              <source
                src={'/mainPageVideos/mainPageVideo.mp4'}
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className={styles.brands__container__media}>
            <video
              className={styles.brands__container__media__video}
              muted
              loop
              autoPlay
              playsInline
            >
              <source
                src={'/mainPageVideos/mainPageVideo.mp4'}
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
            <div className={styles.brands__container__media__links}>
              <Link
                className={styles.brands__container__media__links__bound}
                theme="black"
                to="/leaders"
              >
                {t('mainPage:leaders')}
              </Link>
              <Icon
                path={separator.path}
                viewBox={separator.viewBox}
                className={styles.brands__container__media__links__icon}
              />
              <Link
                className={styles.brands__container__media__links__bound}
                theme="black"
                to="/brands"
              >
                {t('mainPage:brands')}
              </Link>
              <Icon
                path={separator.path}
                viewBox={separator.viewBox}
                className={styles.brands__container__media__links__icon}
              />
              <Link
                className={styles.brands__container__media__links__bound}
                theme="black"
                to="/history"
              >
                {t('mainPage:history')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(MainPageBrands);
