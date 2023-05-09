import Card from './Card';
import hexToRgba from 'hex-to-rgba';

const Equipo = ({
  equipo,
  colorFondo,
  colorCard,
  colaboradores,
  eliminarColaborador,
  actualizarColor,
  id,
  liked,
}) => {
  return (
    <>
      {colaboradores.length > 0 && (
        <section
          className='w-full p-8 box-border text-[32px] font-Prata text-center pt-[34px] relative'
          style={{ backgroundColor: hexToRgba(colorCard, 0.6) }}
        >
          <input
            type='color'
            className='absolute right-20 top-5'
            value={colorCard}
            onChange={(e) => actualizarColor(e.target.value, id)}
          />
          <h3
            className='text-[32px] inline-block text-[#212121] border-b-4 pb-6'
            style={{ borderBottomColor: colorCard }}
          >
            {equipo}
          </h3>
          <div className='flex mt-8 flex-wrap justify-evenly gap-6'>
            {colaboradores.map(
              ({ id, enlace, nombre, puesto, equipo, fav }, index) => (
                <Card
                  key={index}
                  enlace={enlace}
                  nombre={nombre}
                  puesto={puesto}
                  equipo={equipo}
                  colorCard={colorCard}
                  id={id}
                  eliminarColaborador={eliminarColaborador}
                  fav={fav}
                  liked={liked}
                />
              )
            )}
          </div>
        </section>
      )}
    </>
  );
};

export default Equipo;
