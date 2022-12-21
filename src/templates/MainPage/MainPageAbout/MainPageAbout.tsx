import React, { memo } from 'react';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { Button, Icon } from 'modules';
import { verticalLine, quotes } from 'assets/svg';
import * as styles from './MainPageAbout.module.scss';

function MainPageAbout(): JSX.Element {
  const { t } = useTranslation();

  return (
    <div className={styles.about}>
      <div className={styles.about__container}>
        <div className={styles.about__container__inner}>
          <Icon
            path={quotes.path}
            viewBox={quotes.viewBox}
            className={styles.about__container__inner__quotesIcon}
          />
          <h3 className={styles.about__container__inner__heading}>
            {t('mainPage:heading')}
          </h3>
          <Icon
            path={verticalLine.path}
            viewBox={verticalLine.viewBox}
            className={styles.about__container__inner__verticalIcon}
          />
        </div>
        <div className={styles.about__main}>
          <h1
            className={styles.about__main__caption}
            dangerouslySetInnerHTML={{ __html: t('mainPage:caption') }}
          />
          <div className={styles.about__main__footer}>
            <p className={styles.about__main__footer__description}>
              {t('mainPage:description')}
            </p>
            <Button
              className={styles.about__main__footer__button}
              size="m"
              theme="white"
              hasArrow
              type="button"
              to="/about"
            >
              {t('mainPage:button')}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(MainPageAbout);
