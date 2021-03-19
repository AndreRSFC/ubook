import React, { useState } from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

import Input from "./index";

describe("Input", () => {
  const Component = ({
    onChange,
  }: {
    onChange?: () => React.ChangeEvent<HTMLInputElement>;
  }) => {
    const [name, setName] = useState<{ value: string; error: boolean }>({
      value: "",
      error: false,
    });

    return (
      <Input
        placeholder={"Nome"}
        label="Nome"
        id="nome"
        value={name.value}
        onBlur={() => setName({ ...name, error: name.value !== "" })}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setName({ value: e.target.value, error: e.target.value !== "" });
          onChange && onChange();
        }}
        isError={name.error}
        errorMessage="Insira um número de CPF válido"
      />
    );
  };

  it("should render functional input", async () => {
    const onChange = jest.fn();
    render(<Component onChange={onChange} />);

    screen.getByLabelText("Nome");
    const input = screen.getByPlaceholderText("Nome");

    expect(onChange).not.toBeCalled();
    userEvent.type(input, "Andre");

    expect(onChange).toBeCalled();
  });
});
