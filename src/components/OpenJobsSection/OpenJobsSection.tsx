import React, { useState, useEffect } from "react";

import { getJobOpenings } from "services/jobOpeningsService";
import { jobOpeningsAdapter } from "adapters/jobOpeningsAdapter";
import { JobOpeningTreated } from "types/JobOpenings.types";
import { Hiperlink } from "components/Hiperlink";
import event from "assets/foto-bottom.png";

import styles from "./OpenJobsSection.module.scss";

export const OpenJobsSection = () => {
  const [jobOpenings, setJobOpenings] = useState<JobOpeningTreated[]>([]);

  useEffect(() => {
    getJobOpenings().then(
      (res) => setJobOpenings(jobOpeningsAdapter(res.data)),
      (err) => console.log(err)
    );
  }, []);

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
          <h5>{checkForRemoteJob(vaga)}</h5>
        </div>
      ))}
    </div>
  );
};
