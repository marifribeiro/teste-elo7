import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Main from "./Main";

describe("<Main />", () => {
  it("should hender Main Component", () => {
    render(<Main />);

    expect(
      screen.getByRole("heading", { name: /Trabalhe no Elo7/i })
    ).toBeInTheDocument();
  });
});
