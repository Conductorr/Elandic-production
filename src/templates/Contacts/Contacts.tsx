import React, { memo } from 'react';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { PRODUCT_EMAIL, VIMEO_LINK, INSTAGRAM_LINK } from 'core/constants';
import { Button } from 'modules';
import * as styles from './Contacts.module.scss';

function Contacts(): JSX.Element {
  const { t } = useTranslation();

  return (
    <div className={styles.contacts}>
      <div className={styles.contacts__container}>
        <div className={styles.contacts__container__content}>
          <div className={styles.contacts__container__content__links}>
            <h1 className={styles.contacts__container__content__heading}>
              {t('common:contacts')}
            </h1>
            <a
              className={styles.contacts__container__content__media}
              href={`mailto:${PRODUCT_EMAIL}`}
            >
              production@elandic.ru
            </a>
            <a
              target="_blank"
              className={styles.contacts__container__content__media}
              href={INSTAGRAM_LINK}
            >
              @elandic.tv
            </a>
            <a
              target="_blank"
              className={styles.contacts__container__content__media}
              href={VIMEO_LINK}
            >
              vimeo
            </a>
            <Button
              className={styles.contacts__container__content__button}
              size="l"
              theme="white"
              type="button"
              to="/work-with-us"
              hasArrow
            >
              {t('common:work_with_us')}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(Contacts);
