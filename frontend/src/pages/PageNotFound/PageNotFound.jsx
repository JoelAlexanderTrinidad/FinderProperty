import pageNotFound from '../../assets/page_not_found.jpg'
import './pageNotFound.css'

export const PageNotFound = () => {
  return (
    <>
      <div className='flex justify-center items-center h-screen lg:h-96'>
        <img src={pageNotFound} alt="" className='h-80' />
      </div>
    </>
  )
}
