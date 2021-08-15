import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { OpenJobsSection } from "./OpenJobsSection";

describe("<OpenJobsSection />", () => {
  it("should render 'VAGAS EM ABERTO' text", () => {
    render(<OpenJobsSection />);

    expect(screen.getByText("vagas em aberto")).toBeInTheDocument();
  });

  it("displays the correct image", () => {
    render(<OpenJobsSection />);
    const displayedImage = document.querySelector("img") as HTMLImageElement;
    expect(displayedImage.src).toContain("foto-bottom");
  });
});
