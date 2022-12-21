import React, { memo } from 'react';
import * as styles from './WorkItem.module.scss';
import { TypeVideo } from 'apiRest/vimeo';

type Props = {
  video: TypeVideo;
  handleClick: (video: TypeVideo) => void;
};

function WorkItem({ video, handleClick }: Props): JSX.Element {
  return (
    <div
      onClick={() => {
        handleClick(video);
      }}
      className={styles.work}
    >
      <div className={styles.work_hidden}>
        <p className={styles.work__text}>{video.name}</p>
      </div>
      {video.pictures.base_link && (
        <img
          alt={video.name}
          className={styles.work__video}
          src={video.pictures.base_link}
        />
      )}
    </div>
  );
}

export default memo(WorkItem);
