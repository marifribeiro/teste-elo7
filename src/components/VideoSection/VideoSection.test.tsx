import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { VideoSection } from "./VideoSection";

describe("<VideoSection />", () => {
  it("should render 'PALAVRA DO CEO' text", () => {
    render(<VideoSection />);

    expect(screen.getByText("PALAVRA DO CEO")).toBeInTheDocument();
  });

  it("displays the correct image", () => {
    render(<VideoSection />);
    const displayedImage = document.querySelector("img") as HTMLImageElement;
    expect(displayedImage.src).toContain("placeholder-video");
  });
});
