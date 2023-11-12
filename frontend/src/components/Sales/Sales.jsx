import PropTypes from 'prop-types';
import { apiImages } from '../../utils/property.utils';
import useProperty from '../../hooks/useProperty';
import { useNavigate } from 'react-router-dom';

export const Sales = ({sale}) => {

  const {setpropertyID} = useProperty();
  const navigate = useNavigate();

  const handleClick = async () => {
    setpropertyID(sale.id);
    navigate("/details");
  }

  const truncateDescription = (text, maxLength) => {
    if (text.length <= maxLength) {
      return text;
    }
    return text.substring(0, maxLength) + '...';
  };

  return (
    <>
       <div onClick={handleClick} className="max-w-sm rounded overflow-hidden mx-auto w-11/12 mb-10 md:w-80 lg:w-72 lg:m-0 lg:flex lg:flex-col lg:pb-0 lg:cursor-pointer">
          <img className="w-full" src={`${apiImages}/${sale.images[0].name}`} alt={sale.name} />
          <div className="px-6 py-4 flex flex-col gap-3 bg-white pt-5">
              <div className="font-bold text-xl mb-2 bg-white ">{sale.name}</div>
              <p><i className="fa-solid text-indigo-900 fa-location-dot"></i>{sale.adress} </p>
              <p className="text-cyan-900 text-base bg-white">
                {truncateDescription(sale.description, 100)}
              </p>
              <p className="text-lg font-bold">$ {sale.price}</p>
              <div className="flex gap-5 font-bold">
                <p>{sale.beds} beds</p>
              </div>
          </div>
        
        </div>
    </>
  )
}

Sales.propTypes = {
  sale: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    adress: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    beds: PropTypes.number.isRequired,
    images: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired
}