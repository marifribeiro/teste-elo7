import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { CultureItemProps } from "components/CultureItem";
import { CultureList } from "./CultureList";

import qualidade from "assets/qualidade.png";
import descontracao from "assets/descontracao.png";

const cultureList: CultureItemProps[] = [
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
  }
];

describe("<CultureList />", () => {
  it("should render the correct amount of elements", () => {
    render(<CultureList cultureItems={cultureList} />);

    expect(screen.getAllByRole("img")).toHaveLength(cultureList.length);
  });
});
