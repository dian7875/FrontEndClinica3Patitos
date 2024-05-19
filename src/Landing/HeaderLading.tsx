import React from 'react'
import {Link} from 'react-router-dom'
function HeaderLading() {
  return (
    <>
    
      <div className='Header-Container bg-primary flex justify-between'>

        <div className='Icons flex gap-3'>
        <a className='Instagram' href="">
            <img className="w-10 h-10" src="https://cdn-icons-png.flaticon.com/128/1077/1077042.png"  />
        </a>
        <a className='WhathsApp' href="">
            <img className="w-10 h-10" src="https://cdn-icons-png.flaticon.com/128/11121/11121097.png"  />
        </a>
        <a className='Facebook' href="">
            <img className="w-10 h-10" src=" https://cdn-icons-png.flaticon.com/128/747/747374.png
"  />
        </a>

       
        </div>
        <div className='Login'>
          <Link className=' flex gap-3' to={'/login'}>
        <h1>Login in</h1>
        <img className='w-10 h-10' src="https://cdn-icons-png.flaticon.com/128/11340/11340846.png" />
          </Link>

        </div>
    
      </div>

    </>
  )
}

export default HeaderLading
