import { render, screen } from "@testing-library/react";
import Home from "@/app/page";
import Greet from "@/app/components/greet";

//To run only this test use test.only applicable to describe
//test.skip to skip tests also applicable
//describe can be nested as well

describe("Home", () => {
  it("should have Hero section component", () => {
    render(<Home />);
    const myElement = screen.getByText(/This is a new feature/i);

    expect(myElement).toBeInTheDocument();
  });

  it("should", () => {
    expect(1).toBe(1);
  });
});

describe("Greet", () => {
  test("It should work", () => {
    render(<Home />);
    const myElement = screen.getByText(/This is a new feature/i);

    expect(myElement).toBeInTheDocument();
  });

  test("Greet should work correctly", () => {
    render(<Greet name="josh" />);
    const myElement = screen.getByText(/josh/i);

    expect(myElement).toBeInTheDocument();
  });
});
