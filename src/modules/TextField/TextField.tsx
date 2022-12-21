import React, { memo, ChangeEvent } from 'react';
import classNames from 'classnames';
import { FieldControl } from '../FieldControl';
import * as styles from './TextField.module.scss';

type Props = {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  name: string;
  placeholder?: string;
  value?: string;
  hasError?: boolean;
  className?: string;
  disabled?: boolean;
};

function TextField({
  name,
  value,
  className,
  disabled,
  hasError,
  placeholder,
  onChange,
}: Props): JSX.Element {
  return (
    <FieldControl hasError={hasError} disabled={disabled} className={className}>
      <input
        disabled={disabled}
        placeholder={placeholder}
        className={classNames(styles.textField)}
        onChange={onChange}
        name={name}
        value={value}
      />
    </FieldControl>
  );
}

export default memo(TextField);
