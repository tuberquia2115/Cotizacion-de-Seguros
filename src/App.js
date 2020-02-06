import React, { useState } from 'react';
import styled from '@emotion/styled';
import Header from './components/Header/Header';
import Formulario from './components/Formulario/Formulario';
import Resumen from './components/Resumen/Resumen';
import Resultado from './components/Resultado/Resultado';
import Spinner from './components/Spinner/Spinner';


const Contenedor = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const ContenedorFormulario = styled.div`
background-color: #FFF;
padding: 3rem;

`;

function App() {
  const [resumen, guardarResumen] = useState({
    cotizacion: 0,
    datos: {
      year: '',
      marca: '',
      plan: ''
    }
  });

  const [cargando, guardarCargando] = useState(false);

  const { datos, cotizacion } = resumen
  return (
    <Contenedor>
      <Header titulo="Cotizador de seguros" />

      <ContenedorFormulario>
        <Formulario
          guardarResumen={guardarResumen}
          guardarCargando={guardarCargando}
        />
        {cargando ? <Spinner /> : null}
        <Resumen datos={datos} />
        {!cargando ?
          <Resultado cotizacion={cotizacion} />
          : null}
      </ContenedorFormulario>
    </Contenedor>
  );
}

export default App;
