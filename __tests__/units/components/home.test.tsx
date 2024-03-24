import { render, screen } from "@testing-library/react";
import Home from "@/app/page";

describe("Home", () => {
  it("should have Hero section component", () => {
    render(<Home />);
    const myElement = screen.getByText("Docs");

    expect(myElement).toBeInTheDocument();
  });

  it("should", () => {
    expect(1).toBe(1);
  });
});
