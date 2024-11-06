'use client'


import { useState } from 'react';
import ComponenteHome from './components/ComponenteHome/componenteHome';
import ComponentePregunta1 from './components/ComponentePregunta1/componentePregunta1';

export default function Home() {
  // Estado para controlar qué componente mostrar
  const [mostrarComHome, setMostrarComHome] = useState(false);

  // Estado para controlar el difuminado de ComponenteA (fadeOut)
  const [isFadingOut, setIsFadingOut] = useState(false);

  // Estado para controlar la entrada del ComponenteB (fadeIn)
  const [isFadingIn, setIsFadingIn] = useState(false);

  // Función para manejar el clic en el botón y cambiar entre los componentes
  const cambiarComponente = () => {
    // Si estamos mostrando ComponenteA, inicia el difuminado de salida
    setIsFadingOut(true);
    
    // Esperar a que termine el difuminado para cambiar al otro componente
    setTimeout(() => {
      setMostrarComHome(!mostrarComHome); // Cambiar el componente
      setIsFadingOut(false); // Detener el difuminado de salida
      setIsFadingIn(true); // Iniciar el desvanecimiento de entrada de ComponenteB
    }, 500); // Duración de la animación (500 ms)
    
    // Esperar un poco más para dejar que la transición de entrada termine
    setTimeout(() => {
      setIsFadingIn(false); // Detener el difuminado de entrada una vez que el componente B esté visible
    }, 1000); // Duración total de la animación (500 ms de fadeOut + 500 ms de fadeIn)
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Bienvenido a mi aplicación Next.js</h1>

      {/* Mostrar ComponenteA con fadeOut o ComponenteB con fadeIn */}
      {mostrarComHome ? (
        <ComponentePregunta1 isFadingIn={isFadingIn} />
      ) : (
        <ComponenteHome isFadingOut={isFadingOut} />
      )}

      {/* Botón para cambiar entre los componentes */}
      <button
        onClick={cambiarComponente}
        style={{ marginTop: '20px', padding: '10px' }}
      >
        Cambiar Componente
      </button>
    </div>
  );
}
