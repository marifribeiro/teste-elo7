import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { Hiperlink } from "./Hiperlink";

describe("<Hiperlink />", () => {
  it("should render the proper props", () => {
    render(<Hiperlink label="Click me" url="#" />);

    expect(screen.getByRole("link")).toBeInTheDocument();
  });

  it("should redirect to url param", async () => {
    render(<Hiperlink label="Click me" url="elo7/jobs" />);

    expect(screen.getByRole("link")).toHaveAttribute("href", "elo7/jobs");
  });
});
