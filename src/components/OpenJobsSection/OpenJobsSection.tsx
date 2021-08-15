import React from "react";
import { JobOpeningTreated } from "types/JobOpenings.types";
import { OpenJobsSectionProps } from "./OpenJobsSection.types";
import { Hiperlink } from "components/Hiperlink";
import event from "assets/foto-bottom.png";

import styles from "./OpenJobsSection.module.scss";

export const OpenJobsSection = ({ jobOpenings }: OpenJobsSectionProps) => {
  const checkForRemoteJob = (job: JobOpeningTreated): JSX.Element | null => {
    if (job.localizacao) {
      return (
        <span>
          {job.localizacao.bairro} - {job.localizacao.cidade} -{" "}
          {job.localizacao.pais}
        </span>
      );
    }

    if (job.remoto) {
      return <span>Remoto</span>;
    }

    return null;
  };

  return (
    <div className={styles.openJobsSection}>
      <img
        src={event}
        alt="Foto tirada do alto de um evento de venda de artesanatos promovido pelo elo7."
      />
      <h2>vagas em aberto</h2>
      {jobOpenings.map((vaga: JobOpeningTreated, index: number) => (
        <div key={index} className={styles.jobItem}>
          <Hiperlink url={vaga.link} label={vaga.cargo} />
          <h5 data-testid="location">{checkForRemoteJob(vaga)}</h5>
        </div>
      ))}
    </div>
  );
};
