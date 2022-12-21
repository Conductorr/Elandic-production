import React, { memo, ReactNode } from 'react';
import classNames from 'classnames';
import * as styles from './FieldControl.module.scss';

type Props = {
  children: ReactNode;
  className?: string;
  hasError?: boolean;
  focused?: boolean;
  disabled?: boolean;
};

function FieldControl({
  className,
  children,
  hasError,
  focused,
  disabled,
}: Props): JSX.Element {
  return (
    <div
      className={classNames(styles['field'], className, {
        [styles['field_error']]: hasError,
        [styles['field_focused']]: focused,
        [styles['field_disabled']]: disabled,
      })}
    >
      {children}
    </div>
  );
}

export default memo(FieldControl);
