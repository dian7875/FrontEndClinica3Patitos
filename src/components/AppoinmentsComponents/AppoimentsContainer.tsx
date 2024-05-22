
import Card from './Card'

export default function AppoimentsContainer({ isExpanded, setIsExpanded }: { isExpanded: boolean, setIsExpanded: React.Dispatch<React.SetStateAction<boolean>>; }) {

  const expanded = () => {
    setIsExpanded(!isExpanded)
  }

  return (
    <>
      <div className='bg-primary h-full'>
        <div className='flex justify-center'>
          <span className='mt-2 text-xl text-white'>My Appoiments </span>
          <img onClick={expanded} title='Click For View More' className=' w-10 pt-1' src="https://cdn-icons-png.flaticon.com/128/9053/9053032.png" alt="" />
        </div>
        <div className='flex flex-wrap justify-center pb-14'>
          <Card />
        </div>

      </div>

    </>
  )
}
