import { renderHook, act } from "@testing-library/react";
import useCounter from "@/hooks/use-counter";

describe("Use counter", () => {
  test("should render the initial count", () => {
    const { result } = renderHook(() => useCounter({ initialCount: 0 }));
    expect(result.current.count).toBe(0);
  });
  test("should render the count 10", () => {
    const { result } = renderHook(useCounter, {
      initialProps: {
        initialCount: 10,
      },
    });
    expect(result.current.count).toBe(10);
  });

  test("should increment count", () => {
    const { result } = renderHook(() => useCounter({ initialCount: 2 }));
    act(() => {
      result.current.increment();
    });
    expect(result.current.count).toBe(3);
  });

  test("should decrement count", () => {
    const { result } = renderHook(() => useCounter({ initialCount: 2 }));
    act(() => {
      result.current.decrement();
    });
    expect(result.current.count).toBe(1);
  });
});
