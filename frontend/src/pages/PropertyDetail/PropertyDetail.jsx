import ReactImageGallery from "react-image-gallery";
import useProperty from "../../hooks/useProperty";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './propertyDetail.css';

export const PropertyDetail = () => {

  const {propertyID} = useProperty();
  const navigate = useNavigate();
  const [property, setProperty] = useState([]);
  const [propertyType, setPropertyType] = useState("");
  const [laoding, setLoading] = useState(false);


  useEffect(() => {
    
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`https://finderpropertiesapi.onrender.com/property/details/${propertyID}`);
        const data = response.data;
        setProperty(data);

        if(data.publicationTypeId === 1){
          setPropertyType("offer");
        }else if( data.publicationTypeId === 2){
          setPropertyType("rent");
        }else{
          setPropertyType("sale");
        }

      } catch (error) {
        console.log(error);
        navigate("/")
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [])
  
  let images = [];


  if (property.images && property.images.length) {
      images = property.images.map((image) => ({
      original: `http://localhost:3000/images/${image.name}`,
      thumbnail: `http://localhost:3000/images/${image.name}`,
    }));
  
  } else{
      images.push({
        original: `https://i.postimg.cc/Hs4tzp2j/no-image.jpg`,
        thumbnail: `https://i.postimg.cc/Hs4tzp2j/no-image.jpg`,
      })
  }

  console.log(images)


  return (
    <>
      {
        laoding ?
        <div className="flex flex-col gap-10 justify-evenly mt-10 border border-blue-100 shadow rounded-md p-4 mb-10 h-80 w-10/12 mx-auto">
          <div className="animate-pulse flex space-x-4">
            <div className="rounded-full bg-slate-300 h-10 w-10"></div>
            <div className="flex-1 space-y-6 py-1">
              <div className="h-2 bg-slate-300 rounded"></div>
              <div className="space-y-3">
                <div className="grid grid-cols-3 gap-4">
                  <div className="h-2 bg-slate-300 rounded col-span-2"></div>
                  <div className="h-2 bg-slate-300 rounded col-span-1"></div>
                </div>
                <div className="h-2 bg-slate-300 rounded"></div>
              </div>
            </div>
          </div>
          <div className="animate-pulse flex space-x-4">
            <div className="rounded-full bg-slate-300 h-10 w-10"></div>
            <div className="flex-1 space-y-6 py-1">
              <div className="h-2 bg-slate-300 rounded"></div>
              <div className="space-y-3">
                <div className="grid grid-cols-3 gap-4">
                  <div className="h-2 bg-slate-300 rounded col-span-2"></div>
                  <div className="h-2 bg-slate-300 rounded col-span-1"></div>
                </div>
                <div className="h-2 bg-slate-300 rounded"></div>
              </div>
            </div>
          </div>
        </div>
          :

          <div className="mb-18 lg:mb-30">
            
            <div >
              <ReactImageGallery items={images} />
            </div>
            <div className="flex flex-col  items-center mt-8 gap-5 mb-8">
              <h4>{property.name} - $ {property.price} / month</h4>
              <div className="flex gap-4">
                <div className="bg-red-500 w-32 text-white text-center rounded-md text-sm py-1">For {propertyType}</div>
                {
                  propertyType === "offer" &&
                  <div className="bg-green-500 w-32 text-white text-center rounded-md text-sm py-1">25% discount</div>
                }
              </div>
              <p>{property.description}</p>
              <div className="flex flex-col gap-3 lg:flex-row">
                <p><i className="fas fa-bed pe-4"></i>{property.beds} Beds</p>
                <p><i className="fas fa-bath pe-4"></i>{property.baths} Baths</p>
                <p><i className="fas fa-parking pe-4"></i>{property.parking === true ? "Parking spot" : "Not parking spot"}</p>
                <p><i className="fas fa-couch pe-4"></i>{property.furnished === true ? "Furnished" : "Not furnished"}</p>
              </div>
            </div>
          </div>
      }
     
    </>
  )
}
