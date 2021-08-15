import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { OpenJobsSection } from "./OpenJobsSection";
import { JobOpeningTreated } from "types/JobOpenings.types";

const jobs: JobOpeningTreated[] = [
  {
    cargo: "Desenvolvedor Mobile Senior (Android e iOS)",
    ativa: true,
    link: "http://elo7.dev/vaga/desenvolvedor-mobile-senior",
    localizacao: null,
    remoto: true
  },
  {
    cargo: "Desenvolvedor Mobile Senior (Android e iOS)",
    ativa: true,
    link: "http://elo7.dev/vaga/desenvolvedor-mobile-senior",
    localizacao: {
      bairro: "Vila Olímpia",
      cidade: "São Paulo",
      pais: "Brasil"
    },
    remoto: false
  }
];

const wrongFormatJob = [
  {
    cargo: "Desenvolvedor Mobile Senior (Android e iOS)",
    ativa: true,
    link: "http://elo7.dev/vaga/desenvolvedor-mobile-senior"
  }
];

describe("<OpenJobsSection />", () => {
  it("should render 'VAGAS EM ABERTO' text", () => {
    render(<OpenJobsSection jobOpenings={jobs} />);

    expect(screen.getByText("vagas em aberto")).toBeInTheDocument();
  });

  it("displays the correct image", () => {
    render(<OpenJobsSection jobOpenings={jobs} />);
    const displayedImage = document.querySelector("img") as HTMLImageElement;
    expect(displayedImage.src).toContain("foto-bottom");
  });

  it("should render no job lists if jobs's not the correct format", () => {
    render(<OpenJobsSection jobOpenings={wrongFormatJob} />);

    expect(screen.getByTestId("location")).toBeEmptyDOMElement();
  });
});
