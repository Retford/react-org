/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        Prata: ['Prata', 'serif'],
        Mont: ['Montserrat', 'sans-serif'],
      },
      colors: {
        FirstColor: '#6278F7',
        SecondColor: '#95FFD4',
        ThirdColor: '#F2F2F2',
        ColorFondo: {
          Programacion: '#D9F7E9',
          FrontEnd: '#E8F8FF',
          DataScience: '#F0F8E2',
          Devops: '#FDE7E8',
          UxDiseño: '#FAE9F5',
          Movil: '#FFF5D9',
          InnovacionGestion: '#FFEEDF',
        },
        ColorCards: {
          Programacion: '#57C278 ',
          FrontEnd: '#82CFFA',
          DataScience: '#A6D157',
          Devops: '#E06B69',
          UxDiseño: '#DB6EBF',
          Movil: '#FFBA05',
          InnovacionGestion: '#FF8A29',
        },
      },
    },
  },
  plugins: [],
};
