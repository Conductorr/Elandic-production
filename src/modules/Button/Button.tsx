import React, { memo, ReactNode, useCallback } from 'react';
import classNames from 'classnames';
import { Link as GatsbyLink } from 'gatsby-plugin-react-i18next';
import { useFocus } from 'hooks';
import { Icon } from 'modules';
import { arrowMedium, arrowSmall } from 'assets/svg';
import * as styles from './Button.module.scss';

type Props = {
  size: 'l' | 'm';
  theme: 'white' | 'black';
  children: ReactNode;
  className?: string;
  to?: string;
  isDisabled?: boolean;
  hasArrow?: boolean;
  outlined?: boolean;
  type?: 'button' | 'submit';
  onClick?: () => void;
};

function Button({
  size,
  theme,
  children,
  className,
  to,
  isDisabled,
  hasArrow,
  outlined,
  type = 'button',
  onClick,
}: Props): JSX.Element {
  const [buttonRef, focused] = useFocus<HTMLButtonElement>('keyboard');

  function renderIcon(): ReactNode {
    const arrowIcon = size === 'm' ? arrowMedium : arrowSmall;

    return (
      <Icon
        path={arrowIcon.path}
        viewBox={arrowIcon.viewBox}
        className={classNames(
          styles['icon'],
          styles[`icon_${size}`],
          styles[`icon_${size}_${theme}`],
        )}
      />
    );
  }

  const handleClick = useCallback(() => {
    if (onClick) {
      onClick();
    }
  }, [onClick]);

  if (to) {
    return (
      <GatsbyLink
        className={classNames(
          styles['button'],
          styles[`button_${theme}`],
          styles[`button_${theme}_${size}`],
          className,
          {
            [styles['button_focused']]: focused,
            [styles[`button_${theme}_disabled`]]: isDisabled,
          },
        )}
        onClick={handleClick}
        to={to}
      >
        <div className={styles['content']}>
          {children}
          {hasArrow && renderIcon()}
        </div>
      </GatsbyLink>
    );
  }

  return (
    <button
      className={classNames(
        styles['button'],
        styles[`button_${theme}`],
        styles[`button_${theme}_${size}`],
        className,
        {
          [styles['button_focused']]: focused,
          [styles[`button_${theme}_outlined`]]: outlined,
          [styles[`button_${theme}_disabled`]]: isDisabled,
        },
      )}
      onClick={handleClick}
      type={type}
      ref={buttonRef}
    >
      <div className={styles['content']}>
        {children}
        {hasArrow && renderIcon()}
      </div>
    </button>
  );
}

export default memo(Button);
