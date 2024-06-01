
import AppoimentsContainer from "../components/AppoinmentsComponents/AppoimentsContainer"
import FormReservation from "../components/AppoinmentsComponents/FormReservation"
const MyAppointments = () => {

  
  return (
    <>
      <main className={`bg-white h-screen 
      flex flex-col 
      pt-14
      pb-12 dark:bg-secondary`}>
          <FormReservation />
          <AppoimentsContainer />
      </main>
    </>
  )
}

export default MyAppointments
