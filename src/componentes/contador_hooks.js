import React, { useState } from 'react';

 function Contador() {
  // Declara una nueva variable de estado, que llamaremos "contador".
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
export default Contador;

