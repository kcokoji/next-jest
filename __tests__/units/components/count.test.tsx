import Counter from "@/app/components/counter";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("Counter", () => {
  test("render correctly", () => {
    render(<Counter />);
    const incrementButton = screen.getByRole("button", {
      name: "Increment",
    });
    expect(incrementButton).toBeInTheDocument();
  });
  test("render a count of 0", () => {
    render(<Counter />);
    const countHeading = screen.getByRole("heading");
    expect(countHeading).toHaveTextContent("0");
  });

  test("renders a count of 1 after clicking the increment button", async () => {
    userEvent.setup();
    render(<Counter />);
    const incrementButton = screen.getByRole("button", {
      name: "Increment",
    });
    await userEvent.click(incrementButton);
    const countHeading = screen.getByRole("heading");
    expect(countHeading).toHaveTextContent("1");
  });

  test("renders a count of 2 after clicking the increment button twice", async () => {
    userEvent.setup();
    render(<Counter />);
    const incrementButton = screen.getByRole("button", {
      name: "Increment",
    });
    await userEvent.tripleClick(incrementButton);

    const countHeading = screen.getByRole("heading");
    expect(countHeading).toHaveTextContent("3");
  });

  test("renders a count of 10 after clicking the Set button", async () => {
    userEvent.setup();
    render(<Counter />);
    const amountInput = screen.getByRole("spinbutton");
    await userEvent.type(amountInput, "10");
    expect(amountInput).toHaveValue(10);
    const SetButton = screen.getByRole("button", { name: "Set" });
    await userEvent.click(SetButton);
    const countHeading = screen.getByRole("heading");
    expect(countHeading).toHaveTextContent("10");
  });

  test("Expect elements to show in the right order", async () => {
    userEvent.setup();
    render(<Counter />);
    const amountInput = screen.getByRole("spinbutton");
    const incrementButton = screen.getByRole("button", {
      name: "Increment",
    });
    const SetButton = screen.getByRole("button", { name: "Set" });
    await userEvent.tab();
    expect(amountInput).toHaveFocus();
    await userEvent.tab();
    expect(incrementButton).toHaveFocus();
    await userEvent.tab();
    expect(SetButton).toHaveFocus();
  });

  //TODO A wrapper function

  //   test("Providers example for a component",()=>{
  //     render(<Counter/>,{
  //         wrapper:Application
  //     })
  //   })
});
