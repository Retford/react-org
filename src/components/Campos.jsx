const Campos = ({ titulo, placeholder, required, valor, updateValue }) => {
  const manejarCambio = (e) => {
    updateValue(e.target.value);
  };
  return (
    <div className='font-Mont flex flex-col gap-2 w-full'>
      <label className='text-lg font-semibold'>{titulo}</label>
      <input
        type='text'
        placeholder={placeholder}
        className='shadow-xl text-base font-normal w-full h-20 outline-FirstColor pl-5 py-[30px] box-border'
        required={required}
        value={valor}
        onChange={manejarCambio}
      />
    </div>
  );
};

export default Campos;
