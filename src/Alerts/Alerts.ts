import toast,{Toast} from 'react-hot-toast'



export const Edit = () =>{
    toast.success(`Your appointment has been successfully`, {
        icon: '🚀',
        style: {
          borderRadius: '10px',
          background: '#333',
          color: '#fff',
        },
      
    })
  }

export const Cancel = () => toast.success('Your appointment has been canceled successfully')    