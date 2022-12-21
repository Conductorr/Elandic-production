import React, { memo } from 'react';
import * as styles from './WorkItemSkeleton.module.scss';

function WorkItemSkeleton(): JSX.Element {
  return <div className={styles.skeleton} />;
}

export default memo(WorkItemSkeleton);
