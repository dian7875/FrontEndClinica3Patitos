const Main = () => {
  return (
    <>
      <main className="flex-auto px-28 ">
        <div className={`flex flex-col text-center p-3 text-black
        dark:text-black dark:invert`}>
          <span>Our Services</span>
          <div className="flex justify-between">
            <div className="flex flex-col items-center">
              <img width={50} src="https://cdn-icons-png.flaticon.com/128/620/620399.png" alt="" />
              <span>General Medicine</span>
            </div>
            <div className="flex flex-col items-center">
              <img width={50} src="https://cdn-icons-png.flaticon.com/128/3906/3906769.png" alt="" />
              <span>Odontology</span>
            </div>
            <div className="flex flex-col items-center">
              <img width={50} src="https://cdn-icons-png.flaticon.com/128/10154/10154457.png" alt="" />
              <span>Pediatrics</span>
            </div>
            <div className="flex flex-col items-center">
              <img width={50} src="https://cdn-icons-png.flaticon.com/128/15192/15192811.png" alt="" />
              <span>Neurology</span>
            </div>
          </div>
        </div>
        <div className={`w-full flex p-2 justify-between rounded-2xl text-white bg-primary dark:bg-Dark-light`}>
          <div className="flex gap-4">
            <div>
              <img width={70} className="h-full invert" src="https://cdn-icons-png.flaticon.com/128/12764/12764862.png" alt="" />
            </div>
            <div className="flex flex-col">
              <span>
                Schedules:
              </span>
              <span>
                Monday to Friday
              </span>
              <span>9:00 AM - 6:00 PM</span>
            </div>
          </div>
          <div className="flex gap-4">
            <div>
              <img width={70} className="h-full invert" src="https://cdn-icons-png.flaticon.com/128/4375/4375671.png" alt="" />
            </div>
            <div className="flex flex-col">
              <span>
                Contact Us:
              </span>
              <span>
                Email: trespatitos5@gmail.com
              </span>
              <span>
                Phone:+507 8354 1298
              </span>
            </div>
          </div>
          <div className="flex gap-4">
            <div>
              <img width={70} className="h-full invert" src="https://cdn-icons-png.flaticon.com/128/12764/12764862.png" alt="" />
            </div>
            <div className="flex flex-col">
              <span>
                Our Branchs for you:
              </span>
              <a href="https://maps.app.goo.gl/MquVSESU1BcA3hfG8" target="_blank" rel="noopener" className="text-xs">
                Under Loch Ness
              </a>
              <span className="text-xs">
                San Martin
              </span>
              <span className="text-xs">
                Brasilito
              </span>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default Main
