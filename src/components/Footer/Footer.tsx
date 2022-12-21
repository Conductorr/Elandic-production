import React, { memo } from 'react';
import { useTranslation, useI18next } from 'gatsby-plugin-react-i18next';
import { VIMEO_LINK, INSTAGRAM_LINK, PRODUCT_EMAIL } from 'core/constants';
import { Link, Button, Icon, CurrentDate } from 'modules';
import { logoSmall, verticalLine } from 'assets/svg';
import * as styles from './Footer.module.scss';
import classNames from 'classnames';

function Footer(): JSX.Element {
  const { t } = useTranslation();
  const { language } = useI18next();

  console.log(language);

  return (
    <div className={styles.footer}>
      <div className={styles.footer__wrapper}>
        <div className={styles.footer__wrapper__logos}>
          <Icon
            path={logoSmall.path}
            viewBox={logoSmall.viewBox}
            className={styles.footer__wrapper__logos__icon}
          />
          <h1 className={styles.footer__wrapper__logos__heading}>
            @<CurrentDate /> — {t('layout:footer.heading')}
          </h1>
        </div>
        <div
          className={classNames(styles.footer__wrapper__media, {
            [styles.footer__wrapper__media_ru]: language === 'ru',
          })}
        >
          <Link
            className={styles.footer__wrapper__media__privacy}
            hoverType="underlined"
            theme="white"
            to="/privacy"
          >
            {t('layout:footer.privacy')}
          </Link>
          <Icon
            className={styles.footer__wrapper__media__separator}
            path={verticalLine.path}
            viewBox={verticalLine.viewBox}
          />
          <div className={styles.footer__wrapper__media__main}>
            <a
              className={styles.footer__wrapper__media__main__links}
              href={`mailto:${PRODUCT_EMAIL}`}
            >
              production@elandic.ru
            </a>
            <div className={styles.footer__wrapper__media__main__bottom}>
              <a
                target="_blank"
                className={styles.footer__wrapper__media__main__links}
                href={VIMEO_LINK}
              >
                vimeo
              </a>
              <a
                target="_blank"
                className={styles.footer__wrapper__media__main__links}
                href={INSTAGRAM_LINK}
              >
                @elandic.tv
              </a>
            </div>
          </div>
          <div className={styles.footer__wrapper__media__button}>
            <Button
              className={styles.footer__wrapper__media__button_button}
              size="m"
              theme="white"
              type="button"
              to="/contacts"
            >
              {t('common:work_with_us')}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(Footer);
