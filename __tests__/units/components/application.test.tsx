import Application from "@/app/components/application";
import { render, screen } from "@testing-library/react";

describe("Application", () => {
  test("Renders correctly", () => {
    render(<Application />);
    const inputs = screen.getByRole("textbox", { name: "name" });
    expect(inputs).toBeInTheDocument();
    const bioElement = screen.getByRole("textbox", { name: "bio" });
    expect(bioElement).toBeInTheDocument();

    const nameElement = screen.getByLabelText("name");
    expect(nameElement).toBeInTheDocument();

    const nameElement2 = screen.getByPlaceholderText("balls");
    expect(nameElement2).toBeInTheDocument();

    const nameElement3 = screen.getByDisplayValue("Vishwas");
    expect(nameElement3).toBeInTheDocument();

    const imgElement = screen.getByAltText("This is a goat");
    expect(imgElement).toBeInTheDocument();

    const spanElement = screen.getByTitle("close");
    expect(spanElement).toBeInTheDocument();

    const paragraphElement = screen.getByText(/all fees are mandatory/i);
    expect(paragraphElement).toBeInTheDocument();

    const locationElement = screen.getByRole("combobox");
    expect(locationElement).toBeInTheDocument();

    const checkBoxElement = screen.getByRole("checkbox");
    expect(checkBoxElement).toBeInTheDocument();

    const checkBoxElement2 = screen.getByLabelText(
      "I agree to the terms and conditions",
    );
    expect(checkBoxElement2).toBeInTheDocument();

    const submitButton = screen.getByRole("button");
    expect(submitButton).toBeInTheDocument();
    const headingTitle = screen.getByRole("heading", {
      level: 1,
    });
    expect(headingTitle).toBeInTheDocument();

    const descriptionTitle = screen.getByRole("heading", {
      level: 2,
    });
    expect(descriptionTitle).toBeInTheDocument();
  });
});
