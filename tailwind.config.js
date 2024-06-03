/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content()
  ],
Mode: 'media',
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#207a5a', //verde de las imagenes
          DEFAULT: '#5E3A6B', //El color moradito del header
          dark: '#95c5c3', //Los elementos del informacion
          
        },
        Buttons:{
          Cancel: '#876DA1',
          Eliminar: '#543792',
          DarkCancel: '#1f2328',
          DarkEliminar: '#1a212b',
          DarkEdit: '#3d3e3f',

        },
        Dark:{
          light: '#4B5563', //Principal
          DEFAULT: '#000000', //Negro Del fondo
          dark: '#0F2C72', //Azul de componentes
          card:"#5d697a"
        },
        secondary: {
          light: '#876DA1', //boton cancelar cita
          DEFAULT: '#000000', //Negro
          dark: '#543792', //Boton de elimiar cita
        },
        Pop:{
          background: '#dbdbdb',
          bordes: '#c4c4c4',
          darkbg : '#3a3a3a',
          darkborder: '#666464',
          darkbord: '#3a3939'
        },
        shadow: {
          'custom-dark': '100px 100px 100px 100px rgba(0, 0, 0, 0.8)',
          'inner': 'inset 0 2px 4px 0 rgba(132, 84, 150, 0.06)',
        },
        hoversPOP: {
          light: '#898989', 
          dark: '#9e9a9a', 
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
  plugins: [
    flowbite.plugin()
  ]
}