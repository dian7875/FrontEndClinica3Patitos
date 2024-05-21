import toast,{Toast} from 'react-hot-toast'

export const example = () =>{
    toast((t) => (
        <span>
          Your appointment has been edited successfully
          <button style={{backgroundColor: 'tomato'}} onClick={() => {}}>Cerrar</button>
        </span>
      ), {
        icon: '🚀',
        style: {
          borderRadius: '10px',
          background: '#333',
          color: '#fff',
        },
      });
}
