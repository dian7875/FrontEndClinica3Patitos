import Logo from "../../assets/Logo.png"
const Footer = () => {

  return (
    <>
      <footer
      style={{ gridTemplateColumns: '25% 50% 25%' }}
       className={`h-12 fixed bottom-0 w-full
       text-white bg-primary
       dark:bg-Dark-light grid`}>
           <div>
           <img width={45} className="ml-7" src={Logo} alt="" />
           </div>
        <div className="pt-3 text-center">
          © 2024 The Ducklings will rule the world
        </div>
        <div className="flex pt-2 gap-2 justify-end mr-4">
        <a href="">
            <img
              title="IG"
              className="invert"
              width={30}
              src="https://cdn-icons-png.flaticon.com/128/15081/15081235.png"
            />
          </a>
          <a className="WhathsApp" href="">
            <img
              title="WH"
              className="invert"
              width={30}
              src="https://cdn-icons-png.flaticon.com/128/1384/1384007.png"
            />
          </a>
          <a className="Facebook" href="">
            <img
              title="FB"
              className="invert"
              width={30}
              src="https://cdn-icons-png.flaticon.com/128/2175/2175193.png"
            />
          </a>
        </div>
      </footer>
    </>



  )
}

export default Footer
