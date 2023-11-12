import { useNavigate } from "react-router-dom";
import useProperty from "../../hooks/useProperty"
import { apiImages } from "../../utils/property.utils";
import { useEffect } from "react";

export const ListProperty = () => {

    const {searchProperty, setpropertyID} = useProperty();
    const navigate = useNavigate();

    

    useEffect(() => {
        if(searchProperty.length === 0){
            navigate("/notFound")
        }
    }, [searchProperty, navigate])

    const handleClick = async (id) => {
        setpropertyID(id);
        navigate("/details");
    }

  return (
    <>
    <div className="md:flex md:flex-wrap ">
        {
            searchProperty.map((property, i) => (
                <div key={i} onClick={() => handleClick(property.id)} className="max-w-sm rounded overflow-hidden shadow-lg mx-auto w-11/12 mb-10 my-5 md:w-72 cursor-pointer">
                    <img className="w-full" src={`${apiImages}/${property.images[0].name}`} alt={property.name} />
                    <div className="px-6 py-4 flex flex-col gap-3 bg-white pt-5">
                        <div className="font-bold text-xl mb-2 bg-white ">{property.name}</div>
                        <p><i className="fa-solid fa-location-dot"></i>{property.adress} </p>
                        <p className="text-gray-700 text-base bg-white">
                            {property.description}
                        </p>
                        <p className="text-lg font-bold">$ {property.price}</p>
                        <div className="flex gap-5 font-bold">
                            <p>{property.beds} beds</p>
                        </div>
                    </div>
                </div> 
            ))
        }
    </div>
       
    </>
  )
}
