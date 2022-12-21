import React, { memo } from 'react';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import classNames from 'classnames';
import { Button, Icon, Link } from 'modules';
import { logoBig, logoStar } from 'assets/svg';
import * as styles from './MainPageHeading.module.scss';

type Props = {
  isOpenedCategories: boolean;
  onToggleCategories: () => void;
};

function MainPageHeading({
  isOpenedCategories,
  onToggleCategories,
}: Props): JSX.Element {
  const { t } = useTranslation();

  return (
    <>
      <div className={styles.main}>
        <video className={styles.main__video} muted loop autoPlay playsInline>
          <source src={'/mainPageVideos/mainPageVideo.mp4'} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className={styles.main__container}>
          <ul className={styles.main__container__list}>
            <Link
              className={styles.main__container__list__bound}
              theme="white"
              to="/leaders"
            >
              {t('common:leaders')}
            </Link>
            <Link
              className={styles.main__container__list__bound}
              theme="white"
              to="/brands"
            >
              {t('common:brands')}
            </Link>
            <Link
              className={styles.main__container__list__bound}
              theme="white"
              to="/history"
            >
              {t('common:history')}
            </Link>
          </ul>
          <Button
            className={styles.main__container__button}
            outlined
            size="m"
            theme="white"
            onClick={onToggleCategories}
          >
            <span
              className={classNames(styles.main__container__button__text, {
                [styles.main__container__button__text]: isOpenedCategories,
              })}
            >
              {t('mainPage:category')}
            </span>
          </Button>
        </div>
        <div className={styles.main__footer}>
          <Icon
            path={logoBig.path}
            viewBox={logoBig.viewBox}
            className={styles.main__footer__logo}
          />
          <Icon
            path={logoStar.path}
            viewBox={logoStar.viewBox}
            className={styles.main__footer__star}
          />
        </div>
      </div>
    </>
  );
}

export default memo(MainPageHeading);
