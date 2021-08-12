import React from "react";

import { Container } from "components/Container";
import { Header } from "components/Header";
import { VideoSection } from "components/VideoSection";
import { TeamSection } from "components/TeamSection/TeamSection";
import { Photo } from "components/TeamSection";
import camila from "./camila.png";
import david from "./david.png";
import guto from "./guto.png";
import beatriz from "./beatriz.png";

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

export const MainPage = () => {
  return (
    <Container>
      <Header />
      <VideoSection />
      <TeamSection photos={teamPhotos} />
    </Container>
  );
};
