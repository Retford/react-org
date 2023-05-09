import { GrInstagram, GrTwitter, GrGithub, GrFacebook } from 'react-icons/gr';

const Footer = () => {
  return (
    <footer className='box-border bg-[url("/img/Footer.png")] bg-center bg-cover bg-no-repeat h-56 w-full flex justify-between px-40 text-white items-center relative text-xl'>
      <div className='flex gap-9 text-2xl'>
        <a href='' target='_blank'>
          <GrInstagram />
        </a>
        <a
          href='https://twitter.com/BrayanJB5'
          target='_blank'
          rel='noreferrer'
        >
          <GrTwitter />
        </a>
        <a href='https://github.com/retford' target='_blank' rel='noreferrer'>
          <GrGithub />
        </a>
        <a
          href='https://www.facebook.com/brayan.jb.90'
          target='_blank'
          rel='noreferrer'
        >
          <GrFacebook />
        </a>
      </div>
      <img src='img/Logo.png' alt='Logo' />
      <strong className='font-Mont'>
        Desarrollado por Retford O&#39;briam
      </strong>
    </footer>
  );
};

export default Footer;
