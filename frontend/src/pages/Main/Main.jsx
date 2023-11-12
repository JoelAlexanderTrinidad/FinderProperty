import { Offers } from '../../components/Offers/Offers';

import ImageGallery from "react-image-gallery";
// import stylesheet if you're not already using CSS @import
import "react-image-gallery/styles/css/image-gallery.css";
import { Recents } from '../../components/Recents/Recents';
import { Sales } from '../../components/Sales/Sales';
import useProperty from '../../hooks/useProperty';

const images = [
  {
    original: "https://i.postimg.cc/DzJcGGqL/3990589.webp",
    thumbnail: "https://i.postimg.cc/DzJcGGqL/3990589.webp",
  },
  {
    original: "https://i.postimg.cc/XYD8XLyn/6510944.webp",
    thumbnail: "https://i.postimg.cc/XYD8XLyn/6510944.webp",
  },
  {
    original: "https://i.postimg.cc/0yNn8Fjt/8134817.webp",
    thumbnail: "https://i.postimg.cc/0yNn8Fjt/8134817.webp",
  },
];


export const Main = () => {

  const { offers, rent, sale} = useProperty();


  return (
    <>
    
      <div className="flex flex-col gap-5 px-16 pt-10 h-80 bg-amber-100 gradient-css lg:h-56">
          <h3 className="text-5xl font-bold">Easily find your place</h3>
          <p>We help you find your home quickly, safely and comfortably</p>
          <p>let &#39;s start</p>
        
      </div>
      <ImageGallery items={images} />
      
      <div className='bg-indigo-100 pb-10'>
          <div className="p-5 mt-5 ">
                <h4 className='text-2xl font-bold lg:ms-2'>Recent offers</h4>
          </div>
        <div className='md:flex flex-wrap gap-4 justify-evenly'>
          {
            offers.map((offer, i) => (
              <Offers key={i} offer={offer} />
            ))
          }
        </div>

        <div className="p-5 mt-5">
              <h4 className='text-2xl font-bold  lg:ms-2'>Recent places for rent</h4>
        </div>

        <div className='md:flex flex-wrap gap-4 justify-evenly'>
          {
            rent.map((rent, i) => (
              <Recents key={i} rent={rent} />
            ))
          }
        </div>

        <div className="p-5 mt-5">
              <h4 className='text-2xl font-bold  lg:ms-2'>Recent places for sale</h4>
        </div>

        <div className='md:flex flex-wrap gap-4 justify-evenly'>
          {
            sale.map((sale, i) => (
              <Sales key={i} sale={sale} />
            ))
          }
        </div>
      </div>

    </>
    
  )
}
