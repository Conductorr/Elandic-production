 import React, { memo } from 'react';
import classNames from 'classnames';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { Icon } from 'modules';
import { andSignIcon, verticalLine } from 'assets/svg';
import * as styles from './AboutUs.module.scss';

function AboutUs(): JSX.Element {
  const { t } = useTranslation();

  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <div className={styles.header__wrapper}>
          <div className={styles.header__video}>
            <video className={styles.header__video__media} muted loop autoPlay>
              <source
                src={'/mainPageVideos/mainPageVideo.mp4'}
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className={styles.header__heading}>
            <span
              className={classNames(
                styles.header__text,
                styles.header__text_upper,
              )}
            >
              Extremely loud
            </span>
            <Icon
              className={styles.header__icon}
              viewBox={andSignIcon.viewBox}
              path={andSignIcon.path}
            />
            <span
              className={classNames(
                styles.header__text,
                styles.header__text_bottom,
              )}
            >
              Incredibly close
            </span>
          </div>
        </div>
        <div className={styles.header__footer}>
          <Icon
            className={styles.header__footer__icon}
            path={verticalLine.path}
            viewBox={verticalLine.viewBox}
          />
          <h3 className={styles.header__footer__heading}>{t("common:about")}</h3>
        </div>
      </header>
      <main className={styles.content}>
        <div className={styles.article}>
          <div className={styles.article__heading}>
            <p
              className={classNames(
                styles.article__text,
                styles.article__text_bold,
              )}
            >
              {t('aboutUs:info.first_text')}
            </p>
          </div>
          <div className={styles.article__heading_small}>
            <p
              className={classNames(
                styles.article__text,
                styles.article__text_small,
              )}
            >
              {t('aboutUs:info.second_text')}
            </p>
          </div>
        </div>

        <div className={styles.article}>
          <div className={styles.article__footer}>
            <p className={styles.article__footer__text}>
              {t('aboutUs:info.third_text')}
            </p>
            <p className={styles.article__footer__text_small}>
              {t('aboutUs:info.forth_text')}
            </p>
          </div>
        </div>
        <div className={styles.article}>
          <p
            className={classNames(
              styles.article__text,
              styles.article__text_bold,
            )}
          >
            {t('aboutUs:info.satisfied')}
          </p>
        </div>
      </main>
    </div>
  );
}

export default memo(AboutUs);



