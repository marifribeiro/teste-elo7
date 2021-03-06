import React, { useEffect, useState } from "react";

import { Container } from "components/Container";
import { Header } from "components/Header";
import { VideoSection } from "components/VideoSection";
import { TeamSection } from "components/TeamSection/TeamSection";
import { Photo } from "components/TeamSection";
import { CultureList } from "components/CultureList";
import { CultureItemProps } from "components/CultureItem";
import { OpenJobsSection } from "components/OpenJobsSection";
import { jobOpeningsAdapter } from "adapters/jobOpeningsAdapter";
import { getJobOpenings } from "services/jobOpeningsService";

import camila from "assets/camila.png";
import david from "assets/david.png";
import guto from "assets/guto.png";
import beatriz from "assets/beatriz.png";
import qualidade from "assets/qualidade.png";
import descontracao from "assets/descontracao.png";
import atividades from "assets/atividades.png";
import { JobOpeningTreated } from "types/JobOpenings.types";
import { OpenJobsList } from "components/OpenJobsList";

import styles from "./MainPage.module.scss";

const teamPhotos: Photo[] = [
  {
    src: camila,
    alt: "Foto da Camila, funcionária do elo7"
  },
  {
    src: david,
    alt: "Foto do David, funcionário do elo7"
  },
  {
    src: guto,
    alt: "Foto do Guto, funcionário do elo7"
  },
  {
    src: beatriz,
    alt: "Foto da Beatriz, funcionária do elo7"
  }
];

const culture: CultureItemProps[] = [
  {
    imageSrc: qualidade,
    imageAlt: "Círculo amarelo com uma carinha feliz",
    title: "qualidade de vida",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a est dictum, posuere quam non, tincidunt enim. Orci varius natoque penatibus et magnis."
  },
  {
    imageSrc: descontracao,
    imageAlt:
      "Círculo amarelo com uma mão fazendo sinal de rock n' roll, com os dedos indicador e mindinho levantados e os demais abaixados.",
    title: "ambiente descontraído",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a est dictum, posuere quam non, tincidunt enim. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla vitae tincidunt quam. Mauris convallis et mi non cursus. Proin ultricies sapien eros, nec tincidunt velit venenatis."
  },
  {
    imageSrc: atividades,
    imageAlt: "Círculo amarelo com uma paleta de tinta, de pintor",
    title: "atividades extras",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a est dictum, posuere quam non, tincidunt enim. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla vitae tincidunt quam."
  }
];

export const MainPage = () => {
  const [jobOpenings, setJobOpenings] = useState<JobOpeningTreated[]>();
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    getJobOpenings().then(
      (res) => setJobOpenings(jobOpeningsAdapter(res.data)),
      () => setError(true)
    );
  }, []);

  const loadJobsList = (): JSX.Element => {
    if (jobOpenings) {
      return <OpenJobsList jobOpenings={jobOpenings} />;
    } else if (error) {
      return <h3>Erro ao carregar</h3>;
    } else {
      return <h3>Carregando...</h3>;
    }
  };

  return (
    <Container>
      <Header />
      <VideoSection />
      <TeamSection photos={teamPhotos} />
      <CultureList cultureItems={culture} />
      <OpenJobsSection />
      {loadJobsList()}
    </Container>
  );
};
