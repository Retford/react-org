const AddBtn = ({ handleClick }) => {
  return (
    <section className='flex justify-center items-center w-full relative my-[84px]'>
      <h3 className='text-FirstColor font-Prata text-[40px] border-b-4 border-b-FirstColor pb-6'>
        Mi Organización
      </h3>
      <img
        src='/img/addButton.png'
        alt='addButton'
        className='absolute right-[20%] cursor-pointer'
        onClick={handleClick}
      />
    </section>
  );
};

export default AddBtn;
