
import { useState } from "react"
import AppoimentsContainer from "../components/AppoinmentsComponents/AppoimentsContainer"
import FormReservation from "../components/AppoinmentsComponents/FormReservation"

const GeneralAppo = () => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false)
  return (
    <>
    <main className={`flex flex-col pt-12 pb-12 h-screen
    ${!isExpanded ? `overflow-hidden`:`overflow-auto`} `}>
      <FormReservation/>
      <AppoimentsContainer isExpanded={isExpanded} setIsExpanded={setIsExpanded} />
    </main>
    </>
  )
}

export default GeneralAppo
