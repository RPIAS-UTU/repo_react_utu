import React, { useState } from 'react';

export default function Contador() {
  // Declara una nueva variable de estado, que llamaremos "count".
  const [contador, setCount] = useState(0);

  return (
    <div>
      <p>Has cliqueado {contador} veces</p>
      <button onClick={() => setCount(contador + 1)}>
        Incrementar
      </button>
    </div>
  );
}

