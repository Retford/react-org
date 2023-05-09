import { useState } from 'react';
import Boton from './Boton';
import Campos from './Campos';
import ListaOpciones from './ListaOpciones';

const Forms = ({ equipos, registrarColaborador, crearEquipo }) => {
  const manejarEnvio = (e) => {
    e.preventDefault();
    const datosAEnviar = {
      enlace,
      equipo,
      nombre,
      puesto,
    };
    registrarColaborador(datosAEnviar);
  };
  const manejarNuevoEquipo = (e) => {
    e.preventDefault();
    crearEquipo({ titulo, colorCard: color });
  };
  // crear Colaborador
  const [enlace, setEnlace] = useState('');
  const [equipo, setEquipo] = useState('');
  const [nombre, setNombre] = useState('');
  const [puesto, setPuesto] = useState('');
  // crear Equipo
  const [titulo, setTitulo] = useState('');
  const [color, setColor] = useState('');

  return (
    <section className='flex justify-evenly pt-[84px] flex-wrap'>
      <form
        onSubmit={manejarEnvio}
        className='bg-[#f6f6f6] flex flex-col max-w-[1121px] px-[95px] py-[35px] shadow-xl rounded-[20px]'
      >
        <h2 className='font-Prata text-[32px] text-left mb-10'>
          Rellena el formulario para crear el colaborador.
        </h2>
        <div className='flex gap-[26px] flex-col items-start'>
          <Campos
            titulo='Nombre'
            placeholder='Ingresar nombre'
            required
            valor={nombre}
            updateValue={setNombre}
          />
          <Campos
            titulo='Puesto'
            placeholder='Ingresar puesto'
            required
            valor={puesto}
            updateValue={setPuesto}
          />
          <Campos
            titulo='Foto'
            placeholder='Ingresar enlace de la foto'
            required
            valor={enlace}
            updateValue={setEnlace}
          />
          <ListaOpciones
            valor={equipo}
            equipos={equipos}
            setEquipo={setEquipo}
          />
          <Boton>Crear</Boton>
        </div>
      </form>
      <form
        onSubmit={manejarNuevoEquipo}
        className='bg-[#f6f6f6] flex flex-col max-w-[1121px] px-[95px] py-[35px] shadow-xl rounded-[20px]'
      >
        <h2 className='font-Prata text-[32px] text-left mb-10'>
          Rellena el formulario para crear el equipo.
        </h2>
        <div className='flex gap-[26px] flex-col items-start'>
          <Campos
            titulo='Titulo'
            placeholder='Ingresar titulo'
            required
            valor={titulo}
            updateValue={setTitulo}
          />
          <Campos
            type='color'
            titulo='Color'
            placeholder='Ingresar color en Hex...'
            required
            valor={color}
            updateValue={setColor}
          />
          <Boton>Crear Equipo</Boton>
        </div>
      </form>
    </section>
  );
};

export default Forms;
