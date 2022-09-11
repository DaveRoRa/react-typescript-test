import { useState } from "react";

export const HiBye = () => {
  const [state, setState] = useState(true);

  return (
    <div>
      <span>{state ? "Hiii" : "Bye"}</span>
      <button onClick={() => setState((prev) => !prev)}>
        {state ? "Greet" : "Say Goodbye"}
      </button>
    </div>
  );
};

