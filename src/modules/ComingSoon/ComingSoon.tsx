import React, { memo } from 'react';
import * as styles from './ComingSoon.module.scss';
import { useTranslation } from 'gatsby-plugin-react-i18next';

function ComingSoon(): JSX.Element {
  const { t } = useTranslation();

  return (
    <div className={styles['wrapper']}>
      <div className={styles['coming']}>{t('common:coming_soon')}</div>
    </div>
  );
}

export default memo(ComingSoon);
