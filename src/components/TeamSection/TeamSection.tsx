import React from "react";

import { TeamSectionProps, Photo } from "./TeamSection.types";
import styles from "./TeamSection.module.scss";

export const TeamSection = ({ photos }: TeamSectionProps) => {
  return (
    <section className={styles.teamSection}>
      <h2>Conheça nosso time fora de série</h2>
      <div className={styles.teamPhotos}>
        {photos.map((item: Photo, index: number) => (
          <img src={item.src} alt={item.alt} key={index} />
        ))}
      </div>
    </section>
  );
};
