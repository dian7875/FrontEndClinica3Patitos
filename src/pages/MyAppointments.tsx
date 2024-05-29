
import AppoimentsContainer from "../components/AppoinmentsComponents/AppoimentsContainer"
import FormReservation from "../components/AppoinmentsComponents/FormReservation"
const MyAppointments = () => {
  return (
    <>
      <main className="h-screen flex flex-col pb-12">
          <FormReservation />
          <AppoimentsContainer />
      </main>
    </>
  )
}

export default MyAppointments
