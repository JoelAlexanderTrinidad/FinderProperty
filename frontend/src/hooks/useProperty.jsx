import { useContext } from "react";
import { PropertyContext } from "../context/PropertyProvider";

const useProperty = () => {
  return useContext(PropertyContext);
}

export default useProperty;
