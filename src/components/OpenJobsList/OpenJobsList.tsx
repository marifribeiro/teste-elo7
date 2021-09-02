import React from "react";
import { JobOpeningTreated } from "types/JobOpenings.types";

import { OpenJobsListProps } from "./OpenJobsList.types";
import styles from "./OpenJobsList.module.scss";

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

export const OpenJobsList = ({ jobOpenings }: OpenJobsListProps) => {
  return (
    <div className={styles.openJobsSection}>
      {jobOpenings.map((vaga: JobOpeningTreated, index: number) => (
        <div key={index} className={styles.jobItem}>
          <a href={vaga.link}>{vaga.cargo}</a>
          <h5 data-testid="location">{checkForRemoteJob(vaga)}</h5>
        </div>
      ))}
    </div>
  );
};
