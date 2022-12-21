import React, { memo, ReactNode, useCallback } from 'react';
import classNames from 'classnames';
import { Link as GatsbyLink } from 'gatsby-plugin-react-i18next';
import { Icon } from 'modules';
import { arrowSmall } from 'assets/svg';
import * as styles from './Link.module.scss';

type Props = {
  theme: 'black' | 'white';
  children: ReactNode;
  to: string;
  isUppercase?: boolean;
  className?: string;
  arrowDirection?: 'left' | 'right';
  hoverType?: 'animated' | 'underlined' | 'void';
  language?: string;
  isDisabled?: boolean;
  onClick?: () => void;
};

function Link({
  theme,
  children,
  to,
  isUppercase = true,
  className,
  arrowDirection,
  hoverType = 'underlined',
  language,
  isDisabled,
  onClick,
}: Props): JSX.Element {
  const handleCLick = useCallback(() => {
    if (onClick) {
      onClick();
    }
  }, [onClick]);

  return (
    <GatsbyLink
      className={classNames(
        styles['link'],
        styles[`theme_${theme}`],
        styles[`theme_${hoverType}`],
        className,
        {
          [styles['theme_uppercase']]: isUppercase,
          [styles[`theme_disabled`]]: isDisabled,
        },
      )}
      onClick={handleCLick}
      language={language}
      to={to}
    >
      {arrowDirection === 'left' && (
        <Icon
          path={arrowSmall.path}
          viewBox={arrowSmall.viewBox}
          className={classNames(
            styles['icon'],
            styles[`icon_${arrowDirection}`],
          )}
        />
      )}
      {children}
      {arrowDirection === 'right' && (
        <Icon
          path={arrowSmall.path}
          viewBox={arrowSmall.viewBox}
          className={classNames(
            styles['icon'],
            styles[`icon_${arrowDirection}`],
          )}
        />
      )}
    </GatsbyLink>
  );
}

export default memo(Link);
