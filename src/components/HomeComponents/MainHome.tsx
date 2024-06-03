const Main = () => {
  return (
    <>
      <main className="flex-auto">
        <div className={`flex flex-col gap-5 text-center text-black
        dark:text-black dark:invert`}>
          <span className="text-3xl">
            <u className=" underline-offset-4 decoration-primary">Our Services </u>
            </span>
          <div className="grid grid-cols-4 w-full px-4 gap-3">
            <div className="grid"
              style={{ gridTemplateColumns: '35% 65%' }}>
              <img src="https://cdn-icons-png.flaticon.com/128/8885/8885141.png" alt="" />
              <span className="text-left font-bold">General Medicine
                <p className=" font-normal">
                  Our general practitioners
                  provide comprehensive care,
                  from routine check-ups
                  to chronic
                  disease management.
                </p>
              </span>
            </div>
            <div className="grid"
              style={{ gridTemplateColumns: '35% 65%' }}>
              <img src="https://cdn-icons-png.flaticon.com/128/3906/3906769.png" alt="" />
              <span className="text-left font-bold">Odontology
                <p className=" font-normal">
                  We provide comprehensive dental care,
                  from cleanings to advanced treatments,
                  ensuring a healthy,
                  radiant smile.
                </p>
              </span>
            </div>
            <div className="grid"
              style={{ gridTemplateColumns: '35% 65%' }}>
              <img src="https://cdn-icons-png.flaticon.com/128/10154/10154457.png" alt="" />
              <span className="text-left font-bold">Pediatrics
                <p className=" font-normal">
                Our pediatricians offer preventive
                 consultations, vaccinations, 
                 and illness treatment.</p>
              </span>
            </div>
            <div className="grid"
              style={{ gridTemplateColumns: '35% 65%' }}>
              <img src="https://cdn-icons-png.flaticon.com/128/15192/15192811.png" alt="" />
              <span className="text-left font-bold">Neurology
                <p className=" font-normal">
                  Our neurologists diagnose and treat
                  neurological disorders with personalized,
                  cutting-edge care.
                </p>
              </span>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default Main
