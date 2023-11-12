import { useState } from 'react';
import './header.css';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { Logout } from '../../Logout/Logout';
import axios from 'axios';
import useProperty from '../../../hooks/useProperty';

export const Header = () => {

    const [openMenu, setOpenMenu] = useState(false);
    const { currentUser } = useAuth();
    const {setSearchProperty} = useProperty();
    const [modal, setModal] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    const handleSearch = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.get(`http://localhost:3000/property/allProperty`, {
                params: {
                    value: searchTerm, 
                },
            });
            setSearchProperty(response.data.response)
            navigate("/properties")
        } catch (error) {
            console.log(error);
        }
    };

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const menuClick = () => {
        setOpenMenu(!openMenu);
    }

  return (
    <>
    
    <header className="flex justify-around items-center p-5 bg-amber-100">
        <div>
            <Link to={"/"}><h4 className='lg:text-2xl'>HomeFind</h4></Link>
        </div>
        <form className='relative' onSubmit={handleSearch}>
            <input type="text" value={searchTerm} onChange={handleChange} className="rounded-md h-8 p-1 ps-2 md:w-80 lg:w-96" placeholder='Search...'/>
            <button type="submit" className='w-8 h-8 absolute right-2'>
                        <i className="fas fa-search "></i>
            </button>
        </form>
        <div onClick={menuClick} className='flex items-center lg:hidden w-8 justify-center h-8'>
            <i className="fas fa-ellipsis-v text-xl "></i>
        </div>
        {
            currentUser ? (
                <>
                    <div className={openMenu ? 'showMenu' : 'hideMenu'}>
                        <div className='flex flex-col items-center justify-center gap-5 h-full'>
                            <Link to={"/"}><span onClick={menuClick}>Home</span> </Link>
                            <Link to={"/profile"}><span onClick={menuClick}>Profile</span></Link>
                            <button
                                className="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none rounded-lg text-sm p-2.5"
                                onClick={() => {setModal(true); menuClick()}}
                            >   
                            <div className='flex gap-2'>
                                <span>Logout</span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
                                </svg>
                            </div>
                            </button>
                        </div>
                    </div>

                    <div className="hidden lg:block">
                        <div className='flex  items-center justify-center gap-5 h-full'>
                            <Link to={"/"}><span >Home</span> </Link>
                            <Link to={"/profile"}><span >Profile</span></Link>
                            <button
                                className=" focus:outline-none rounded-lg text-sm p-2.5"
                                onClick={() => {setModal(true)}}
                            >   
                            <div className='flex gap-2'>
                                <span>Logout</span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
                                </svg>
                            </div>
                            </button>
                        </div>
                    </div>
                </>
                
            ) : 
            <>
                <div className={openMenu ? 'showMenu' : 'hideMenu'}>
                    <div className='flex flex-col items-center justify-center gap-5 h-full'>
                        <Link to={"/"}><span onClick={menuClick}>Home</span> </Link>
                        <Link to={"/login"}><span onClick={menuClick}>Login</span></Link>
                        <Link to={"/register"}><span onClick={menuClick}>Register</span></Link>
                    </div>
                </div>

                <div className="hidden lg:block">
                    <div className='flex items-center justify-center gap-5 h-full'>
                        <Link to={"/"}><span>Home</span> </Link>
                        <Link to={"/login"}><span>Login</span></Link>
                        <Link to={"/register"}><span>Register</span></Link>
                    </div>
                </div>
            </>
        }
      
        </header>
     {modal && <Logout modal={modal} setModal={setModal} />}
    </>
  )
}
