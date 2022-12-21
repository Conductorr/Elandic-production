import React, { memo } from 'react';
import * as styles from './CurrentDate.module.scss';

function CurrentDate(): JSX.Element {
  return <p className={styles.current}>{new Date().getUTCFullYear()}</p>;
}

export default memo(CurrentDate);
