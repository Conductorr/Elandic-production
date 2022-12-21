import React, { memo, ReactNode } from 'react';
import classNames from 'classnames';
import { Icon } from 'modules';
import { verticalLine } from 'assets/svg';
import * as styles from './Label.module.scss';

type Props = {
  children: ReactNode;
  theme?: 'white' | 'black';
  className?: string;
  classNameLine?: string;
};

function Label({
  children,
  theme = 'white',
  className,
  classNameLine,
}: Props): JSX.Element {
  return (
    <span
      className={classNames(styles.label, styles[`label_${theme}`], className)}
    >
      {children}
      <Icon
        path={verticalLine.path}
        viewBox={verticalLine.viewBox}
        className={classNames(
          styles.icon,
          styles[`icon_${theme}`],
          classNameLine,
        )}
      />
    </span>
  );
}

export default memo(Label);
