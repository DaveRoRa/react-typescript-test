import { screen, render, fireEvent } from "@testing-library/react";
import { HiBye } from "./hibye";

describe("HiBye", () => {
  test("renders correctly", () => {
    render(<HiBye />);
    const spanElement = screen.getByText("Hiii");
    expect(spanElement).toBeInTheDocument();
    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toBeInTheDocument();
  });

  test("change text when button clicked", () => {
    render(<HiBye />);
    const buttonElement = screen.getByRole("button",{name: "Greet"});
    fireEvent.click(buttonElement)
    expect(buttonElement).toHaveTextContent("Say Goodbye")
    const spanElement = screen.getByText("Bye"); 
    expect(spanElement).toBeInTheDocument()
    fireEvent.click(buttonElement)
    expect(buttonElement).toHaveTextContent("Greet")
    expect(spanElement).toHaveTextContent("Hiii")
  });
});
