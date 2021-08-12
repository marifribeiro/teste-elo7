import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { CultureItemProps } from "./CultureItem.types";
import { CultureItem } from "./CultureItem";

import qualidade from "assets/qualidade.png";

const cultureItem: CultureItemProps = {
  imageSrc: qualidade,
  imageAlt: "Círculo amarelo com uma carinha feliz",
  title: "qualidade de vida",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a est dictum, posuere quam non, tincidunt enim. Orci varius natoque penatibus et magnis."
};

describe("<CultureItem />", () => {
  it("should render the correct image", () => {
    render(<CultureItem {...cultureItem} />);

    const displayedImage = document.querySelector("img") as HTMLImageElement;
    expect(displayedImage.src).toContain("qualidade");

    expect(
      screen.getByAltText("Círculo amarelo com uma carinha feliz")
    ).toBeInTheDocument();
  });

  it("should render the correct title", () => {
    render(<CultureItem {...cultureItem} />);

    expect(screen.getByText("qualidade de vida")).toBeInTheDocument();
  });
});
