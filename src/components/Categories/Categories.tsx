import React, { memo } from 'react';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import classNames from 'classnames';
import { Link, Button } from 'modules';
import * as styles from './Categories.module.scss';

type Props = {
  isOpenedCategories: boolean;
  onToggleCategories: () => void;
};

function Categories({
  isOpenedCategories,
  onToggleCategories,
}: Props): JSX.Element {
  const { t } = useTranslation();

  return (
    <div
      className={classNames(styles.categories, {
        [styles.categories_opened]: isOpenedCategories,
      })}
    >
      <div className={styles.categories__container}>
        <ul className={styles.categories__container__list}>
          <Link
            className={styles.categories__container__link}
            theme="white"
            to="/"
          >
            {t('common:advertisement')}
          </Link>
          <Link
            className={styles.categories__container__link}
            theme="white"
            to="/"
          >
            {t('common:special_projects')}
          </Link>
          <Link
            className={styles.categories__container__link}
            theme="white"
            to="/"
          >
            {t('common:production_of_services')}
          </Link>
          <Link
            className={styles.categories__container__link}
            theme="white"
            to="/"
          >
            {t('common:motion_design')}
          </Link>
          <Link
            className={styles.categories__container__link}
            theme="white"
            to="/"
          >
            {t('common:photo')}
          </Link>
          <Link
            className={styles.categories__container__link}
            theme="white"
            to="/"
          >
            {t('common:events')}
          </Link>
          <Link
            className={styles.categories__container__link}
            theme="white"
            to="/"
          >
            {t('common:corporate')}
          </Link>
        </ul>
        <Button
          className={styles.categories__container__button}
          outlined
          size="m"
          theme="white"
          onClick={onToggleCategories}
        >
          <span
            className={classNames(styles.categories__container__button__close, {
              [styles.categories__container__button__close_open]:
                isOpenedCategories,
            })}
          >
            {t('common:close')}
          </span>
        </Button>
      </div>
    </div>
  );
}

export default memo(Categories);
