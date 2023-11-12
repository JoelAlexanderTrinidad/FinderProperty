import notFoundImage from '../../assets/notFound.png';

export const PropertyNotFound = () => {
  return (
    <>
      <div className='flex flex-col items-center'>
        <h1 className='mt-10'>PROPERTY NOT FOUND</h1>
        <img src={notFoundImage} alt="not_found" className='w-80' />
      </div>
    </>
  )
}
