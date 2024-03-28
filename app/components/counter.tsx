import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const [amount, setAmount] = useState(0);
  return (
    <div>
      <h1>{count}</h1>
      <input
        type="number"
        name="amount"
        onChange={(e) => {
          setAmount(parseInt(e.target.value));
        }}
      />
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(amount)}>Set</button>
    </div>
  );
}
