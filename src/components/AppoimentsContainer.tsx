
import Card from './Card'

export default function AppoimentsContainer() {

    const TriangleUp = "https://cdn-icons-png.flaticon.com/128/9053/9053032.png"
   
  return (
    <>
    <div className=' bg-primary'>
    <div className='flex justify-center gap-10'>
    <h1 className='text-4xl mt-2 text-white'>My Appoiments </h1>
    <img className=' w-16 ' src={TriangleUp} alt="" />
    </div>
    <div className='flex flex-wrap justify-center'>
          <Card/>
        </div>

    </div>
      
    </>
  )
}
