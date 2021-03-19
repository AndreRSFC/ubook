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
    const [CPF, setCPF] = useState<{ value: string; error: boolean }>({
      value: "",
      error: false,
    });

    return (
      <Input
        placeholder={"Nome"}
        label="Nome"
        id="nome"
        value={CPF.value}
        onBlur={() => setCPF({ ...CPF, error: CPF.value !== "" })}
        onChange={(e: any) => {
          setCPF(e.target.value);
          onChange && onChange();
        }}
        isError={CPF.error}
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
