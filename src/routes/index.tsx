import React from "react";

import { BrowserRouter, Route } from "react-router-dom";

import { MainPage } from "pages/MainPage";

export const Router = () => {
  return (
    <BrowserRouter>
      <Route path="/" component={MainPage} />
    </BrowserRouter>
  );
};
