import React, { useContext } from "react";
import { render, fireEvent, screen } from "@testing-library/react";

import { ModalContext, ModalProvider } from "./modalContext";
import userEvent from "@testing-library/user-event";

const App = () => (
  <div>
    <div id="modal-root" />
  </div>
);

const AppClick = () => {
  const { handleModal } = useContext(ModalContext);
  return (
    <div>
      <button
        data-testid="modal-root"
        onClick={() =>
          handleModal({
            element: (
              <div>
                <h1>Criar novo contato</h1> <span>TESTE</span>
              </div>
            ),
          })
        }
      />
      <App />
    </div>
  );
};

describe("Component: Modal", () => {
  it("render open modal ", async () => {
    render(
      <ModalProvider>
        <AppClick />
      </ModalProvider>
    );

    const buttonWrapper = screen.getByTestId("modal-root");

    userEvent.click(buttonWrapper);
    screen.getByText("Criar novo contato");
    expect(screen.getByText("TESTE"));
  });

  it("Render and close modal", async () => {
    render(
      <ModalProvider>
        <AppClick />
      </ModalProvider>
    );

    const buttonWrapper = screen.getByTestId("modal-root");

    userEvent.click(buttonWrapper);
    expect(screen.getByText("TESTE"));
    const buttonCancel = screen.getByText("Cancelar");
    userEvent.click(buttonCancel);
    expect(screen.queryByText("TESTE")).toBeNull();

    userEvent.click(buttonWrapper);
    expect(screen.getByText("TESTE"));
    const buttonSave = screen.getByText("Salvar");
    userEvent.click(buttonSave);
    expect(screen.queryByText("TESTE")).toBeNull();
  });
});
