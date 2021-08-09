import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { Header } from "./Header";

describe("<Header />", () => {
  it("should hender a header tag", () => {
    render(<Header />);

    expect(screen.getByRole("heading")).toBeInTheDocument();
  });

  it("should render 'Trabalhe no Elo7' text", () => {
    render(<Header />);

    expect(screen.getByText("Trabalhe no Elo7")).toBeInTheDocument();
  });

  it("displays the correct image", () => {
    render(<Header />);
    const displayedImage = document.querySelector("img") as HTMLImageElement;
    expect(displayedImage.src).toContain("foto-header");
  });

  it("contains hiperlink to open jobs positions", () => {
    render(<Header />);
    expect(screen.getByText(/vagas em aberto/i)).toHaveAttribute("href", "#");
  });
});
