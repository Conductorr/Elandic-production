import React, { memo } from 'react';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { Icon } from 'modules';
import { up } from 'assets/svg';
import * as styles from './MainPageEnding.module.scss';

function MainPageEnding(): JSX.Element {
  const { t } = useTranslation();

  return (
    <div className={styles.ending}>
      <div className={styles.ending__emptyContainer} />
      <div className={styles.ending__container}>
        <h1 className={styles.ending__container__heading}>
          {t('mainPage:create')}
        </h1>
        {/*<div className={styles.ending__container__navigation}>*/}
        {/*  <Icon*/}
        {/*    path={up.path}*/}
        {/*    viewBox={up.viewBox}*/}
        {/*    className={styles.ending__container__navigation__icon}*/}
        {/*  />*/}
        {/*  <h2 className={styles.ending__container__navigation__text}>*/}
        {/*    {t('common:up')}*/}
        {/*  </h2>*/}
        {/*</div>*/}
      </div>
      <div className={styles.ending__background}>
        <img
          className={styles.ending__background__image}
          src={'/mainPageImg/ending.png'}
          alt={t('layout:footer.image')}
        />
      </div>
    </div>
  );
}

export default memo(MainPageEnding);
