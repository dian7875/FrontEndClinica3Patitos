
const LogOut = () => {
    
    const onLogOut=()=>{
        localStorage.removeItem('authToken');
    }
  return (
    <>
      <button onClick={onLogOut} type="button">Log Out</button>
    </>
  )
}

export default LogOut
