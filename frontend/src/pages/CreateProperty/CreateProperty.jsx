import axios from 'axios'
import {Formik, Field, ErrorMessage} from 'formik'
import { useEffect, useState } from 'react';
import * as Yup from 'yup'
import useAuth from '../../hooks/useAuth';
import useProperty from '../../hooks/useProperty';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const CreateProperty = () => {
    const notify = () => toast.success('Property created!', {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });

    const navigate = useNavigate();

    const {setUpdated} = useProperty();
    const {emailUser} = useAuth();
    const [userEmail, setUserEmail] = useState("");

    useEffect(() => {
        if (emailUser) {
            setUserEmail(emailUser.email); 
        }
    }, [emailUser])

    const validationSchema = Yup.object({
        name: Yup.string().required("The name is required"),
        description: Yup.string().required("Description is required"),
        adress: Yup.string().required("The adress of beds is required"),
        beds: Yup.number().required("The number of beds is required"),
        baths: Yup.number().required("The number of bathrooms is required"),
        price: Yup.number().required("The price is required"),
      })

    const [selectedFiles, setSelectedFiles] = useState([]);

    const handleFileChange = (event) => {
        const files = Array.from(event.target.files);
        setSelectedFiles(files);
    };

    const handleSubmit = async (values) => {

        let formData = new FormData();
        if (selectedFiles) {
            for (let i = 0; i < selectedFiles.length; i++) {
                formData.append('images', selectedFiles[i]);
            }
        }
        
        formData.append('name', values.name);
        formData.append('description', values.description);
        formData.append('adress', values.adress);
        formData.append('propertyStatus', values.propertyStatus);
        formData.append('parking', values.parking);
        formData.append('furnished', values.furnished);
        formData.append('beds', values.beds);
        formData.append('baths', values.baths);
        formData.append('price', values.price);

        console.log(formData)

        if (userEmail) {
            formData.append('emailUser', userEmail);
        }
    
        try {
            const response = await axios.post(`http://localhost:3000/create`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            console.log(response.data)
            setUpdated(true);
            notify();
            setTimeout(() => {
                navigate("/profile");
            },[3000])
        } catch (error) {
            console.error(error);
        }
    }
    
    const initial_values = {
        name: "",
        description: "",
        adress: "",
        propertyStatus: "",
        parking: false,
        furnished: false,
        beds: "",
        baths: "",
        price: "",
        photo: null,
    }

  return (
    <>
        <h1 className="text-3xl text-center mt-5">Create property</h1>
        <Formik
            initialValues={initial_values}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
        >
            {
                (formik) => (
                    <form className="p-8 lg:p-20 lg:w-8/12 lg:mx-auto lg:flex lg:flex-col" onSubmit={formik.handleSubmit} >
                        <div className="mb-6">
                            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                            <Field
                                id="name"
                                type="text"
                                name= "name"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
                                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" 
                                    />
                                </div>
                                <div className="flex gap-1">
                                    <label htmlFor="rent" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Rent</label>
                                    <Field
                                        id="rent"
                                        type="radio"
                                        name= "propertyStatus"
                                        value="rent"
                                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                                    />
                                </div>
                                <div className="flex gap-1">
                                    <label htmlFor="offer" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Offer</label>
                                    <Field
                                        id="offer"
                                        type="radio"
                                        name= "propertyStatus"
                                        value="offer"
                                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                                    />
                                </div>
                                <div>
                                    
                                </div>
                                <div className="flex gap-1">
                                    <label htmlFor="parking" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Parking</label>
                                    <Field
                                        id="parking"
                                        type="checkbox"
                                        name= "parking"
                                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" 
                                    />
                                </div>
                                <div className="flex gap-1">
                                    <label htmlFor="furnished" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Furnished</label>
                                    <Field
                                        id="furnished"
                                        type="checkbox"
                                        name= "furnished"
                                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" 
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
                        <div className="flex flex-col gap-3">
                            <label htmlFor="photo" className="text-gray-900 dark:text-white flex items-center text-lg font-bold">Upload photo</label>
                            <Field
                                id="photo"
                                type="file"
                                name= "photo"
                                multiple
                                onChange={handleFileChange}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                            />
                        </div>
        
                        <button type="submit" className="text-white my-5 bg-slate-700 hover:bg-slate-800 focus:ring-4 focus:outline-none focus:ring-slate-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-slate-600 dark:hover:bg-slate-700 dark:focus:ring-slate-800">Create property</button>
                    </form>
                )
            }
            
            </Formik>
            <ToastContainer />
    </>

  )
}
