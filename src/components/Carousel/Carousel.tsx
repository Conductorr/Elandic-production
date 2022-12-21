import React, { memo } from 'react';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import Marquee from 'react-fast-marquee';
import { carouselConfig } from './carouselConfig';
import { verticalLine } from 'assets/svg';
import { Icon } from 'modules';
import * as styles from './Carousel.module.scss';
import classNames from 'classnames';

function Carousel(): JSX.Element {
  const { t } = useTranslation();

  return (
    <div className={styles.wrapper}>
      <div className={styles.carousel}>
        <div className={styles.carousel__container}>
          <div className={styles.carousel__container__description}>
            <h1 className={styles.carousel__container__description__heading}>
              {t('mainPage:clients')}
            </h1>
            <Icon
              path={verticalLine.path}
              viewBox={verticalLine.viewBox}
              className={styles.carousel__container__description_icon}
            />
          </div>
          <div className={styles.carousel__container__clients}>
            <Marquee gradient={false} speed={130}>
              {carouselConfig.map(({ path, viewBox, className }) => (
                <div
                  className={styles.carousel__container__clients__item}
                  key={path}
                >
                  <Icon
                    className={classNames(
                      styles.carousel__container__clients__item__icon,
                      styles[className],
                    )}
                    path={path}
                    viewBox={viewBox}
                  />
                </div>
              ))}
            </Marquee>
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(Carousel);
