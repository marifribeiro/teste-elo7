import React from "react";
import event from "assets/foto-bottom.png";

import styles from "./OpenJobsSection.module.scss";

export const OpenJobsSection = () => {
  return (
    <div className={styles.openJobsSection} id="vagas">
      <img
        src={event}
        alt="Foto tirada do alto de um evento de venda de artesanatos promovido pelo elo7."
      />
      <h2>vagas em aberto</h2>
    </div>
  );
};
