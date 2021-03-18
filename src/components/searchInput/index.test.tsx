import React, { useState } from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import SearchInput from "./index";

describe("SearchInput", () => {
  it("should render functional type search", async () => {
    const Component = ({
      onChange,
    }: {
      onChange?: () => React.ChangeEvent<HTMLInputElement>;
    }) => {
      const [name, setName] = useState<string>("");

      return (
        <SearchInput
          value={name}
          onChange={(e) => {
            setName(e.target.value);
            onChange && onChange();
          }}
          placeholder="Buscar..."
        />
      );
    };

    const mockFunction = jest.fn();
    render(<Component onChange={mockFunction} />);

    const input = screen.getByPlaceholderText("Buscar...");
    userEvent.type(input, "André");
    screen.getByDisplayValue("André");
  });

  it("should render functional send event search", async () => {
    const eventFunction = jest.fn();

    render(
      <SearchInput
        value=""
        onClick={eventFunction}
        placeholder="Buscar..."
      />
    );

    const input = screen.getByPlaceholderText("Buscar...");

    userEvent.type(input, "André");

    expect(eventFunction).not.toBeCalled();
    userEvent.click(screen.getByTestId("SearchIcon"));
    expect(eventFunction).toBeCalled();

    expect(eventFunction).toBeCalledTimes(1);

    fireEvent.keyPress(input, { key: "Enter", code: 13, charCode: 13 });

    expect(eventFunction).toBeCalledTimes(2);
  });
});
