  
import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Button from "./index";

import PlusIcon from "../../icons/plus";

describe("Button", () => {
  it("should render functional button", async () => {
    const mockFunction = jest.fn();
    render(<Button text="Criar contato" onClick={mockFunction} />);

    screen.getByText("Criar contato");
    screen.getByLabelText("Criar contato");

    expect(mockFunction).not.toBeCalled();

    const element = await screen.getByText("Criar contato");
    userEvent.click(element);

    expect(mockFunction).toBeCalled();
  });

  it("should render functional button with icon", async () => {
    const mockFunction = jest.fn();
    render(
      <Button
        text="Criar contato"
        onClick={mockFunction}
        icon={<PlusIcon />}
      />
    );

    screen.getByTestId("PlusIcon");
  });
});