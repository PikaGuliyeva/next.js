
"use client";

import { useState } from "react";

export default function Counter({ start }: { start: number }) {
  const [count, setCount] = useState(start);

  return (
    <div>
      <h2>Say: {count}</h2>

      <button onClick={() => setCount(count + 1)}>
        Artır
      </button>
    </div>
  );
}
