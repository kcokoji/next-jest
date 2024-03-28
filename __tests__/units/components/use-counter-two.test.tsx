import UseCounter from "@/app/components/use-counter";
import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";

describe("Counter Two", () => {
  test("render correctly", () => {
    render(<UseCounter />);
    const textElement = screen.getByText("Counter Two");
    expect(textElement).toBeInTheDocument();
  });

  test("handlers are called ", async () => {
    user.setup();
    const incrementHandler = jest.fn();
    const decrementHandler = jest.fn();
    render(
      <UseCounter
        count={0}
        handleDecrement={incrementHandler}
        handleIncrement={decrementHandler}
      />,
    );
    const incrementButton = screen.getByRole("button", {
      name: "Increment",
    });
    const decremenButton = screen.getByRole("button", {
      name: "Decrement",
    });
    await user.click(incrementButton);
    await user.click(decremenButton);
    expect(incrementHandler).toHaveBeenCalledTimes(1);
    expect(decrementHandler).toHaveBeenCalledTimes(1);
  });
});
