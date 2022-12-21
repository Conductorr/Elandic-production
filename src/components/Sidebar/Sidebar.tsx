import React, { memo } from 'react';
import classNames from 'classnames';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { PRODUCT_EMAIL, VIMEO_LINK, INSTAGRAM_LINK } from 'core/constants';
import { Icon, Link, Button, CurrentDate } from 'modules';
import { logoSmall } from 'assets/svg';
import * as styles from './Sidebar.module.scss';

type Props = {
  isOpenedSidebar: boolean;
  onToggleSidebar: () => void;
};

function Sidebar({ isOpenedSidebar, onToggleSidebar }: Props): JSX.Element {
  const { t } = useTranslation();

  return (
    <div
      className={classNames(styles.sidebar, {
        [styles.sidebar_opened]: isOpenedSidebar,
      })}
    >
      <div className={styles.sidebar__container}>
        <div className={styles.sidebar__content}>
          <div className={styles.sidebar__main}>
            <div className={styles.sidebar__links}>
              <Link
                className={styles.sidebar__link}
                onClick={onToggleSidebar}
                hoverType="void"
                theme="black"
                to="/about"
              >
                {t('common:about')}
              </Link>
              <Link
                className={styles.sidebar__link}
                onClick={onToggleSidebar}
                hoverType="void"
                theme="black"
                to="/contacts"
              >
                {t('common:contacts')}
              </Link>
              <Link
                className={styles.sidebar__link}
                onClick={onToggleSidebar}
                hoverType="void"
                theme="black"
                to="/work-with-us"
              >
                {t('common:work_with_us')}
              </Link>
            </div>
            <div className={styles.sidebar__media}>
              <Button
                className={styles.sidebar__button}
                size="m"
                theme="black"
                type="button"
                to="/leaders/portfolio"
                onClick={onToggleSidebar}
                hasArrow
              >
                {t('common:portfolio')}
              </Button>
              <a
                className={styles.sidebar__heading}
                href={`mailto:${PRODUCT_EMAIL}`}
              >
                production@elandic.ru
              </a>
              <a
                target="_blank"
                className={styles.sidebar__heading}
                href={INSTAGRAM_LINK}
              >
                @elandic.tv
              </a>
              <a
                target="_blank"
                className={styles.sidebar__heading}
                href={VIMEO_LINK}
              >
                vimeo
              </a>
            </div>
          </div>
        </div>
        <div className={styles.sidebar__footer}>
          <div className={styles.sidebar__logos}>
            <Icon
              path={logoSmall.path}
              viewBox={logoSmall.viewBox}
              className={styles.sidebar__icon}
            />
            <h1 className={styles.sidebar__date}>
              @<CurrentDate />— {t('layout:footer.heading')}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(Sidebar);
