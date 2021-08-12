import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import camila from "assets/camila.png";
import david from "assets/david.png";
import guto from "assets/guto.png";
import beatriz from "assets/beatriz.png";

import { TeamSectionProps, Photo } from "./TeamSection.types";
import { TeamSection } from "./TeamSection";

const teamPhotos: Photo[] = [
  {
    src: camila,
    alt: "Foto da Camila, funcionária do elo7"
  }
];

describe("<TeamSection />", () => {
  it("should render the proper props", () => {
    render(<TeamSection photos={teamPhotos} />);

    expect(
      screen.getByAltText("Foto da Camila, funcionária do elo7")
    ).toBeInTheDocument();
  });
});
