import { render, screen, logRoles } from "@testing-library/react";
import { Skills } from "./skills";

describe("Skills", () => {
  const skills = ["HTML", "CSS", "Javascript"];

  test("renders correctly", () => {
    render(<Skills skills={skills} />);
    const listElement = screen.getByRole("list");
    expect(listElement).toBeInTheDocument();
  });

  test("renders a list of skills", () => {
    render(<Skills skills={skills} />);
    const listItemsElements = screen.getAllByRole("listitem");
    expect(listItemsElements).toHaveLength(skills.length);
  });

  test("renders Login button", () => {
    render(<Skills skills={skills} />);
    const loginBtn = screen.getByRole("button", { name: "Login" });
    expect(loginBtn).toBeInTheDocument();
  });

  test("does'nt render Start Learning button", () => {
    const startLearningBtn = screen.queryByRole("button", {
      name: "Start Learning",
    });
    expect(startLearningBtn).not.toBeInTheDocument();
  });

  test("displays  Start Learning button eventually", async () => {
    const view = render(<Skills skills={skills} />);
    logRoles(view.container)
    //screen.debug()
    const startLearningBtn = await screen.findByRole(
      "button",
      {
        name: "Start Learning",
      },
      {
        timeout: 2000,
      }
    );
    expect(startLearningBtn).toBeInTheDocument();
  });
});
