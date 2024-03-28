import Skills from "@/app/components/skills";
import { logRoles, render, screen } from "@testing-library/react";

describe("Skills", () => {
  const skills = ["HTML", "CSS", "JAVASCRIPT", "TYPESCRIPT"];
  test("renders correctly", () => {
    render(<Skills Skills={skills} />);
    const listElement = screen.getByRole("list");
    expect(listElement).toBeInTheDocument();
  });

  test("renders a list of skills correctly", () => {
    render(<Skills Skills={skills} />);
    const listItemElement = screen.getAllByRole("listitem");
    expect(listItemElement).toHaveLength(skills.length);

    const listItem = screen.getByText((content) => content.startsWith("CS"));
    expect(listItem).toBeInTheDocument();

    const listItem2 = screen.getByText(/java/i);
    expect(listItem2).toBeInTheDocument();
  });

  test("render Login button", () => {
    render(<Skills Skills={skills} />);
    const login = screen.getByRole("button", {
      name: "Login",
    });
    expect(login).toBeInTheDocument();
  });

  test("Start learning button is not rendered", () => {
    render(<Skills Skills={skills} />);
    const startLearningButton = screen.queryByRole("button", {
      name: "Start learning",
    });
    expect(startLearningButton).not.toBeInTheDocument();
  });

  test("Start learning button is eventually rendered", async () => {
    const view = render(<Skills Skills={skills} />);
    // logRoles(view.container);
    // screen.debug();
    const startLearningButton = await screen.findByRole(
      "button",
      {
        name: "Start learning",
      },
      { timeout: 5000 },
    );

    expect(startLearningButton).toBeInTheDocument();
  });
});
