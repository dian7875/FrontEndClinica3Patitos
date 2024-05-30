
import { useContext } from "react"
import AppoimentsContainer from "../components/AppoinmentsComponents/AppoimentsContainer"
import FormReservation from "../components/AppoinmentsComponents/FormReservation"
import ListContext from "../Contexts/ListContext/ListContext"
import image from "../assets/Loanding_Gif.gif"
const MyAppointments = () => {
  const {loading}= useContext(ListContext);

  if (loading) {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <img src={image} alt="Loading" />
        </div>
    );
} else {
  return (
    <>
      <main className={`bg-white h-screen flex flex-col pb-12 dark:bg-secondary`}>
          <FormReservation />
          <AppoimentsContainer />
      </main>
    </>
  );
}
}

export default MyAppointments
