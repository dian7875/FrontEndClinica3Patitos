/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#207a5a', //verde de las imagenes
          DEFAULT: '#5E3A6B', //El color moradito del header
          dark: '#95c5c3', //Los elementos del informacion
        },
        Dark:{
          light: 'FFFFFF', //Blanco Del Texto
          DEFAULT: '#000000', //Negro Del fondo
          dark: '#0F2C72', //Azul de componentes
        },
        secondary: {
          light: '#876DA1', //boton cancelar cita
          DEFAULT: '#000000', //Negro
          dark: '#543792', //Boton de elimiar cita
        },
        customColor: '#3490dc',
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['dark'],
      textColor: ['dark'],
    },
  },
  plugins: [],
}