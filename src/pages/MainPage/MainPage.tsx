import React from "react";

import { Container } from "components/Container";
import { Header } from "components/Header";
import { VideoSection } from "components/VideoSection";

export const MainPage = () => {
  return (
    <Container>
      <Header />
      <VideoSection />
    </Container>
  );
};
