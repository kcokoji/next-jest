import React, { useState } from "react";

interface Props {
  initialCount?: number;
}

export default function useCounter({ initialCount = 0 }: Props) {
  const [count, setCount] = useState(initialCount);
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  return { count, increment, decrement };
}
