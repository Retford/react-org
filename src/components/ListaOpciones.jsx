const ListaOpciones = ({ valor, setEquipo, equipos }) => {
  const manejarCambio = (e) => {
    setEquipo(e.target.value);
  };

  return (
    <div className='font-Mont flex flex-col gap-2 w-full'>
      <label className='text-lg font-semibold'>Equipos</label>
      <select
        className='shadow-xl text-base font-normal  w-full h-20 outline-FirstColor pl-5 py-[30px]'
        value={valor}
        onChange={manejarCambio}
      >
        <option value='' disabled defaultValue='' hidden>
          Seleccionar Equipo
        </option>
        {equipos.map((equipo, index) => (
          <option value={equipo} key={index}>
            {equipo}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ListaOpciones;
