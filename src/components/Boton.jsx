const Boton = ({ children }) => {
  return (
    <button className='font-Mont font-bold text-xl text-white border-none py-7 px-12 rounded-[10px] bg-FirstColor mt-[14px] hover:text-SecondColor transition-colors'>
      {children}
    </button>
  );
};

export default Boton;
