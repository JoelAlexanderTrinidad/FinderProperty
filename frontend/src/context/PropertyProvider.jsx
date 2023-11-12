import { useEffect, useState } from "react";
import { createContext } from "react";
import PropTypes from 'prop-types';
import axios from "axios";
import { offerFilter, rentFilter, saleFilter } from "../services/property.service";

export const PropertyContext = createContext(null);

export const PropertyProvider = ( {children}) => {

    const [properties, setProperties] = useState([]);
    const [offers, setOffers] = useState([]);
    const [rent, setRent] = useState([]);
    const [sale, setSale] = useState([]);
    const [propertyID, setpropertyID] = useState("");
    const [updated, setUpdated] = useState(false);
    const [editProperty, setEditProperty] = useState([]);
    const [searchProperty, setSearchProperty] = useState([]);

    useEffect(() => {
      const getProperties = async () => {
        try {
          const allProperties = await axios.get("http://localhost:3000");
          const data = allProperties.data
          setProperties(data);

          const offers = await offerFilter(data);
          setOffers(offers);

          const rent = await rentFilter(data);
          setRent(rent);

          const sale = await saleFilter(data);
          setSale(sale);

          setUpdated(true)

        } catch (error) {
          throw new Error(error);
        } finally {
          setUpdated(false)
        }
      }
      getProperties();
    }, [updated])

    const contextValue = {
      properties,
      offers,
      rent,
      sale,
      setpropertyID,
      propertyID,
      setUpdated,
      setEditProperty,
      editProperty,
      setSearchProperty,
      searchProperty
    }

  return (
    <PropertyContext.Provider value={contextValue}>
        {children}
    </PropertyContext.Provider>
  )
}

PropertyProvider.propTypes = {
  children: PropTypes.node.isRequired
}
