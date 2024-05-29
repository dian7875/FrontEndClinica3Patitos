const NewAppoBtn = () => {
  return (
    <>
      <button type="submit" className={`bg-white rounded-md w-24 shadow-lg shadow-purple-500/50 h-full dark:bg-gray-900 dark:shadow-gray-900/50 dark:text-white`}>
        Reserve
      </button>
      <button type="button" className={` bg-primary text-white rounded-md w-24 dark:bg-gray-800`}>
        Clean
      </button>
    </>
  )
}

export default NewAppoBtn

