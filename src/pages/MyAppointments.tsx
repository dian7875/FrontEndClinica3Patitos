
import AppoimentsContainer from "../components/AppoinmentsComponents/AppoimentsContainer"
import FormReservation from "../components/AppoinmentsComponents/FormReservation"

const MyAppointments = () => {
  return (
    <>
      <main className="h-screen flex flex-col pb-12 bg-[url(./src/assets/Backgorund.jpg)] 
        dark:bg-[url(./src/assets/BGDARK.jpg)]
      dark:text-white">
          <FormReservation />
          <AppoimentsContainer />
      </main>
    </>
  )
}

export default MyAppointments
