import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import EmptyList from "./index";

describe("EmptyList", () => {
  it("should render functional emptylist", async () => {
    render(<EmptyList />);

    screen.getByLabelText("Agenda vazia");

    screen.getByText("Nenhum contato foi criado ainda.");

    const element = await screen.getByText("Criar contato");
    userEvent.click(element);
  });
});
