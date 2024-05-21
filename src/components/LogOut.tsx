
const LogOut = () => {
    
    const onLogOut=()=>{
        localStorage.removeItem('authToken');
        console.log(localStorage.getItem('authToken'))
    }


  return (
    <>
      <button onClick={onLogOut} type="button">Log Out</button>
    </>
  )
}

export default LogOut
