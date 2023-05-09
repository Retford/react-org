import { GrTrash } from 'react-icons/gr';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';

const Card = ({
  enlace,
  nombre,
  puesto,
  colorCard,
  equipo,
  eliminarColaborador,
  id,
  fav,
  liked,
}) => {
  return (
    <div className='rounded-xl relative w-[262px] h-[272px] bg-white mb-6'>
      <GrTrash
        onClick={() => eliminarColaborador(id)}
        className='absolute right-2 top-2 bg-white rounded-full p-2 cursor-pointer'
      />
      <div
        className='flex justify-center h-[91.9px] rounded-tl-[10px] rounded-tr-[10px] mb-[87px]'
        style={{ backgroundColor: colorCard }}
      >
        <img
          src={enlace}
          alt='instructor'
          className='rounded-full mt-8 absolute'
          width='120'
        />
      </div>
      <div className='font-Mont flex justify-center items-center flex-col w-full'>
        <h4 className='text-FirstColor text-lg font-semibold'>{nombre}</h4>
        <h5 className='text-[#212121] text-base font-normal w-[200px]'>
          {puesto}
        </h5>
        {fav ? (
          <AiFillHeart
            className='cursor-pointer'
            color='red'
            onClick={() => liked(id)}
          />
        ) : (
          <AiOutlineHeart
            className='cursor-pointer'
            onClick={() => liked(id)}
          />
        )}
      </div>
    </div>
  );
};

export default Card;
