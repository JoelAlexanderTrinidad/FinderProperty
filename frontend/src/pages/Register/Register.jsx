import { Link } from "react-router-dom"
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

import { useEffect, useState } from "react";
import axios from "axios";

    
export const Register = () => {

    const navigate = useNavigate();

    const { currentUser, register } = useAuth();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);
    const [errorPassword, setErrorPassword] = useState(false);
    const [confirmPassword, setConfirmPassword] = useState("");
    const [loading, setLoading] = useState(false);

      async function handleFormSubmit(e) {
        e.preventDefault();
        setError(false);
        setErrorPassword(false);
        if (password !== confirmPassword) {
          return setErrorPassword(true);
        }

        try {
          setError("");
          setLoading(true);
          
        await register(email, password);
        const createUser = async () => {
            const response = await axios.post(`http://localhost:3000/user/create`,{
                name: name,
                email: email,
                password: password
              })
    
            const data = response.data
            console.log("data", data)
        }

        createUser();

        navigate("/profile");
        } catch (e) {
            setError(true);
        }
    
        setLoading(false);
    }
    
        useEffect(() => {
            if (currentUser) {
            navigate("/");
            }
        }, [currentUser, navigate]);
    
    return (
    <section className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            
            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                        Create and account
                    </h1>
                    <form className="space-y-4 md:space-y-6" onSubmit={handleFormSubmit}>
                        <div>
                            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your name</label>
                            <input 
                                type="text" 
                                name="name" 
                                id="name" 
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Lalo Landa" required=""
                                autoComplete="name"
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                            <input 
                                type="email" 
                                name="email" 
                                id="email" 
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required=""
                                autoComplete="email"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                            <input 
                                type="password" 
                                name="password" 
                                id="password"
                                placeholder="••••••••" 
                                autoComplete="current-password"
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="confirm-password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
                            <input 
                                type="password" 
                                name="confirm-password" 
                                id="confirm-password" 
                                placeholder="••••••••" 
                                autoComplete="current-password"
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" 
                                onChange={(e) => setConfirmPassword(e.target.value)}
                            />
                        </div>
                        {
                            error && <div className="text-red-500">
                                error to register!
                            </div>
                        }
                        {
                            errorPassword && <div className="text-red-500">
                                password not match!
                            </div>
                        }
                        <button disabled={loading} type="submit" className="w-full text-white bg-slate-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Create an account</button>
                        <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                            Already have an account? 
                            <Link to={'/login'} className="font-bold text-primary-600 hover:underline dark:text-primary-500 ms-3 text-xl ">Login here</Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    </section>
    )
}
    