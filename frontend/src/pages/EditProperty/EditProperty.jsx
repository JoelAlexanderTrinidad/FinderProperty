import { ErrorMessage, Field, Formik } from "formik"
import useProperty from "../../hooks/useProperty"
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const EditProperty = () => {

    const notify = () => toast.success('Property updated!', {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });

    const {editProperty} = useProperty();
    const {setpropertyID} = useProperty();
    const navigate = useNavigate();


    const handleSubmit = async (values) => {
        
        try {
            const response = await axios.put(`http://localhost:3000/property/update/${editProperty.id}`,{
                name: values.name,
                description: values.description,
                adress: values.adress,
                propertyStatus: values.propertyStatus,
                parking: values.parking,
                furnished: values.furnished,
                beds: values.beds,
                baths: values.baths,
                price: values.price
            })

            setpropertyID(editProperty.id);
            notify();
            setTimeout(() => {
                navigate("/details");
            },[3000])
            console.log(response.data)
        } catch (error) {
            console.log(error)
        }
       
    }

    const initial_values = {
        name: editProperty.name,
        description: editProperty.description,
        adress: editProperty.adress,
        propertyStatus: editProperty.propertyStatus,
        parking: editProperty.parking,
        furnished: editProperty.furnished,
        beds: editProperty.beds,
        baths:editProperty.baths,
        price: editProperty.price,
    }

  return (
    <>
    <h1 className="text-3xl text-center mt-5">Update property</h1>
    <Formik
        initialValues={initial_values}
        onSubmit={handleSubmit}
    >
        {
            (formik) => (
                <form className="p-8 lg:p-20 lg:w-8/12 lg:mx-auto lg:flex lg:flex-col " onSubmit={formik.handleSubmit} >
                    <div className="mb-6">
                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                        <Field
                            id="name"
                            type="text"
                            name= "name"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 "
                        />
                        <ErrorMessage 
                            name='name'
                            component="div"
                            className='text-red-500 ms-1'
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                        <Field
                            id="description"
                            type="text"
                            name= "description"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 "
                        />
                        <ErrorMessage 
                            name='description'
                            component="div"
                            className='text-red-500 ms-1'
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="adress" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Adress</label>
                        <Field
                            id="adress"
                            type="text"
                            name= "adress"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 "
                        />
                         <ErrorMessage 
                            name='adress'
                            component="div"
                            className='text-red-500 ms-1'
                        />
                    </div>
                    <div className="flex items-start justify-center mb-6">
                        <div className="flex items-center h-5 gap-2">
                            <div className="flex gap-1">
                                <label htmlFor="sell" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Sell</label>
                                <Field
                                    id="sell"
                                    type="radio"
                                    name= "propertyStatus"
                                    value="sell"
                                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 "  
                                />
                            </div>
                            <div className="flex gap-1">
                                <label htmlFor="rent" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Rent</label>
                                <Field
                                    id="rent"
                                    type="radio"
                                    name= "propertyStatus"
                                    value="rent"
                                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 "
                                />
                            </div>
                            <div className="flex gap-1">
                                <label htmlFor="offer" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Offer</label>
                                <Field
                                    id="offer"
                                    type="radio"
                                    name= "propertyStatus"
                                    value="offer"
                                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 "
                                />
                            </div>
                            <div className="flex gap-1">
                                <label htmlFor="parking" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Parking</label>
                                <Field
                                    id="parking"
                                    type="checkbox"
                                    name= "parking"
                                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 "  
                                />
                            </div>
                            <div className="flex gap-1">
                                <label htmlFor="furnished" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Furnished</label>
                                <Field
                                    id="furnished"
                                    type="checkbox"
                                    name= "furnished"
                                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 " 
                                />
                            </div>
                           
                        </div>
                    </div>
                    <div className="flex flex-col gap-5 mb-8">
                        <div className="flex gap-5">
                            <div className="flex gap-3 items-center flex-col lg:w-36">
                                <label htmlFor="beds" className=" text-sm font-medium text-gray-900 dark:text-white flex items-center">Beds</label>
                                <Field
                                    id="beds"
                                    type="number"
                                    name= "beds"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-14 h-6 lg:w-full"
                                />
                                <ErrorMessage 
                                    name='beds'
                                    component="div"
                                    className='text-red-500 ms-1'
                                />
                            </div>
                            <div className="flex gap-3 items-center flex-col lg:w-36">
                                <label htmlFor="baths" className=" text-sm font-medium text-gray-900 dark:text-white flex items-center">Baths</label>
                                <Field
                                    id="baths"
                                    type="number"
                                    name= "baths"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-14 h-6 lg:w-full"
                                />
                                <ErrorMessage 
                                    name='baths'
                                    component="div"
                                    className='text-red-500 ms-1'
                                />
                            </div>
                        </div>
                        <div className="flex gap-3 items-center flex-col lg:w-96 lg:items-start">
                                <label htmlFor="price" className=" text-sm font-medium text-gray-900 dark:text-white flex items-center">Regular Price ($ / month)</label>
                                <Field
                                    id="price"
                                    type="number"
                                    name= "price"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-24 h-6 lg:w-36"
                                />
                            <ErrorMessage 
                                name='price'
                                component="div"
                                className='text-red-500 ms-1'
                            />
                        </div>
                    </div>
    
                    <button type="submit" className="text-white my-5 bg-slate-700 hover:bg-slate-800 focus:ring-4 focus:outline-none focus:ring-slate-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-slate-600 dark:hover:bg-slate-700 dark:focus:ring-slate-800">Update property</button>
                </form>
            )
        }
        
        </Formik>
        <ToastContainer />
    </>
  )
}
