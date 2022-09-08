/**
 * Welcome should render the text hello and if a name is passed into de component
 * It should render hello followed by the name
 */

import { render, screen } from "@testing-library/react";
import { Welcome } from "./welcome";

describe("Welcome", () => {
  test("should render just Hello", () => {
    render(<Welcome />);
    const textElement = screen.getByText("Hello");
    expect(textElement).toBeInTheDocument();
  });

  describe("Nested", () => {
    test("should render Hello and the name", () => {
      render(<Welcome name={"Mary"} />);
      const textElement = screen.getByText("Hello Mary");
      expect(textElement).toBeInTheDocument();
    });
  });
});
