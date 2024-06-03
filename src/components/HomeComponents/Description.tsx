
const Description = () => {
  return (
    <>
      <div className='text-left pt-3 ml-8 h-2/5'>
        <div className='text-2xl font-bold'>
          <h1>Welcome to Clinic Three</h1>
          <h1> Duckling</h1>
        </div>
        <div className='pt-3'>
          <p>By far the place to recieve fast and professional
             medical services 
             <br/>
             You can find us in our branches: <a href="https://maps.app.goo.gl/MquVSESU1BcA3hfG8" target="_blank" rel="noopener noreferrer">
             <u className=" decoration-primary hover:decoration-cyan-400">Under Loch Ness</u>
             </a>,
             <br />
             <a href="https://maps.app.goo.gl/18qWJJSzxJp4aQLcA">
             <u  className=" decoration-primary hover:decoration-cyan-400">Brasilito</u>
             </a> and <a href="https://maps.app.goo.gl/BW4cGD6N7smjprv47" target="_blank" rel="noopener noreferrer">
             <u className=" decoration-primary hover:decoration-cyan-400">San Martin</u>
             </a>
             </p>
        </div>
        <div>
          <button type="button" className='w-32 mt-2 bg-primary text-white rounded-xl
          dark:bg-Dark-light hover:bg-black shadow-lg shadow-primary dark:shadow-white
          '>View more</button>
        </div>
      </div>
    </>
  )
}

export default Description
