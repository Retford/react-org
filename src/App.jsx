import { useState } from 'react';
import AddBtn from './components/AddBtn';
import Forms from './components/Forms';
import Header from './components/Header';
import Equipo from './components/Equipo';
import Footer from './components/Footer';
import { v4 as uuid } from 'uuid';

const App = () => {
  const [showFroms, setShowForms] = useState(false);
  const [colaboradores, setColaboradores] = useState([
    {
      id: uuid(),
      enlace: 'https://github.com/retford.png',
      equipo: 'Front End',
      nombre: 'Retford',
      puesto: 'Desarrollador Junior',
    },
    {
      id: uuid(),
      enlace: 'https://github.com/retford.png',
      equipo: 'Devops',
      nombre: 'Retford',
      puesto: 'Desarrollador Junior',
    },
    {
      id: uuid(),
      enlace: 'https://github.com/retford.png',
      equipo: 'Data Science',
      nombre: 'Retford',
      puesto: 'Desarrollador Junior',
    },
    {
      id: uuid(),
      enlace: 'https://github.com/retford.png',
      equipo: 'Front End',
      nombre: 'Retford',
      puesto: 'Desarrollador Junior',
    },
  ]);
  const [equipos, setEquipos] = useState([
    {
      id: uuid(),
      titulo: 'Programación',
      colorFondo: '#D9F7E9',
      colorCard: '#57C278',
    },
    {
      id: uuid(),
      titulo: 'Data Science',
      colorFondo: '#F0F8E2',
      colorCard: '#A6D157',
    },
    {
      id: uuid(),
      titulo: 'Devops',
      colorFondo: '#FDE7E8',
      colorCard: '#E06B69',
    },
    {
      id: uuid(),
      titulo: 'Front End',
      colorFondo: '#E8F8FF',
      colorCard: '#82CFFA',
    },
    {
      id: uuid(),
      titulo: 'Innovación y Gestión',
      colorFondo: '#FFEEDF',
      colorCard: '#FF8A29',
    },
    {
      id: uuid(),
      titulo: 'Móvil',
      colorFondo: '#FFF5D9',
      colorCard: '#FFBA05',
    },
    {
      id: uuid(),
      titulo: 'Ux y Diseño',
      colorFondo: '#FAE9F5',
      colorCard: '#DB6EBF',
    },
  ]);
  const handleClick = () => {
    setShowForms(!showFroms);
  };

  // Registrar Colaborador
  const registrarColaborador = (colaborador) => {
    setColaboradores([...colaboradores, colaborador]);
  };

  // Eliminar Colaborador
  const eliminarColaborador = (id) => {
    console.log('eliminar', id);
    const nuevosColaboradores = colaboradores.filter(
      (colaborador) => colaborador.id !== id
    );
    setColaboradores(nuevosColaboradores);
  };

  // Actualizar Color de Equipo
  const actualizarColor = (color, id) => {
    const equiposActualizados = equipos.map((equipo) => {
      if (equipo.id === id) {
        equipo.colorCard = color;
      }
      return equipo;
    });
    setEquipos(equiposActualizados);
  };

  // Crear Equipo
  const crearEquipo = (nuevoEquipo) => {
    setEquipos([...equipos, { ...nuevoEquipo, id: uuid() }]);
  };

  return (
    <>
      <Header />
      {showFroms && (
        <Forms
          equipos={equipos.map(({ titulo }) => titulo)}
          registrarColaborador={registrarColaborador}
          crearEquipo={crearEquipo}
        />
      )}
      <AddBtn handleClick={handleClick} />
      {equipos.map(({ titulo, colorFondo, colorCard, id }) => (
        <Equipo
          key={id}
          id={id}
          equipo={titulo}
          colorFondo={colorFondo}
          colorCard={colorCard}
          colaboradores={colaboradores.filter(
            ({ equipo }) => equipo === titulo
          )}
          actualizarColor={actualizarColor}
          eliminarColaborador={eliminarColaborador}
        />
      ))}
      <Footer />
    </>
  );
};

export default App;
