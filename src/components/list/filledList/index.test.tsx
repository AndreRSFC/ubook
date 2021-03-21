import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import FilledList from "./index";

import { ContactsMock, OneContactMock } from "../../../data/__mocks__/contacts";

describe("Header", () => {
  const editFunction = jest.fn();
  const deleteFunction = jest.fn();

  it("should render list header", async () => {
    render(
      <FilledList
        onEditClick={editFunction}
        onDeleteClick={deleteFunction}
        contacts={OneContactMock}
      />
    );

    screen.getByText("Contatos");
    screen.getByText("E-mail");
    screen.getByText("Telefone");
  });

  it("should render list with one contact", async () => {
    render(
      <FilledList
        onEditClick={editFunction}
        onDeleteClick={deleteFunction}
        contacts={OneContactMock}
      />
    );

    screen.getByText(OneContactMock[0].name);
    screen.getByText(OneContactMock[0].email);
    screen.getByText(OneContactMock[0].phone);

    expect(screen.getAllByLabelText("Editar Contato").length).toBe(1);
    expect(screen.getAllByLabelText("Deletar Contato").length).toBe(1);
  });

  it("should render list with some contact", async () => {
    render(
      <FilledList
        onEditClick={editFunction}
        onDeleteClick={deleteFunction}
        contacts={ContactsMock}
      />
    );

    ContactsMock.forEach((contact) => {
      screen.getByText(contact.name);
      screen.getByText(contact.email);
      screen.getByText(contact.phone);
    });

    expect(screen.getAllByLabelText("Editar Contato").length).toBe(3);
    expect(screen.getAllByLabelText("Deletar Contato").length).toBe(3);
  });

  it("should render list lines functionalities", () => {
    render(
      <FilledList
        onEditClick={editFunction}
        onDeleteClick={deleteFunction}
        contacts={OneContactMock}
      />
    );

    expect(editFunction).not.toBeCalled();
    expect(deleteFunction).not.toBeCalled();

    userEvent.click(screen.getByLabelText("Editar Contato"));
    userEvent.click(screen.getByLabelText("Deletar Contato"));

    expect(editFunction).toBeCalled();
    expect(deleteFunction).toBeCalled();
  });
});
