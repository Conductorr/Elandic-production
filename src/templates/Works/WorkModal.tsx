import React, { memo, useRef } from 'react';
import { close } from 'assets/svg';
import { TypeVideo } from 'apiRest/vimeo';
import { Icon } from 'modules';
import * as styles from './WorkModal.module.scss';

type Props = {
  handleCloseSelectedVideo: () => void;
  selectedVideo: TypeVideo;
};

function WorkModal({
  handleCloseSelectedVideo,
  selectedVideo,
}: Props): JSX.Element {
  const videoRef = useRef(null);

  return (
    <div
      onClick={handleCloseSelectedVideo}
      role="dialog"
      className={styles.modal}
    >
      <div className={styles.modal__content}>
        <button onClick={handleCloseSelectedVideo} className={styles.close}>
          <Icon
            className={styles.icon}
            path={close.path}
            viewBox={close.viewBox}
          />
        </button>
        <iframe
          ref={videoRef}
          src={`${selectedVideo.player_embed_url}&amp;title=0&amp;byline=0&amp;portrait=0&amp;speed=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp`}
          frameBorder="0"
          className={styles.video}
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          title={selectedVideo.name}
        />
      </div>
    </div>
  );
}

export default memo(WorkModal);
