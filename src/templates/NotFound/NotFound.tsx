import React, { memo } from 'react';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { Button } from 'modules';
import * as styles from './NotFound.module.scss';

function NotFound(): JSX.Element {
  const { t } = useTranslation();

  return (
    <div className={styles['page']}>
      <div className={styles['content']}>
        <div className={styles['content__text']}>
          <span className={styles['text']}>{t('notFound:main')} </span>
          <span className={styles['subText']}>(404)</span>
        </div>
        <div className={styles['button']}>
          <Button
            className={styles['button__item']}
            hasArrow
            size="m"
            theme="white"
            to="/"
          >
            {t('common:navigation.back_to_main')}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default memo(NotFound);
