import React from "react";

import videoPlaceholder from "./placeholder-video.png";
import styles from "./VideoSection.module.scss";

export const VideoSection = () => {
  return (
    <div className={styles.videoSection}>
      <img src={videoPlaceholder} />
      <section id="video-description">
        <h2>PALAVRA DO CEO</h2>
        <h4>Carlos Curioni</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
          vulputate ullamcorper elit. Nam quis odio a felis gravida accumsan vel
          non dolor. Pellentesque condimentum leo at eros lacinia imperdiet.
          Fusce ipsum tellus, consequat sed fringilla sit amet.
        </p>
      </section>
    </div>
  );
};
