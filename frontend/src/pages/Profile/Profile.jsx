import axios from 'axios';
import { Link } from 'react-router-dom'
import useAuth from '../../hooks/useAuth';
import { useEffect, useState } from 'react';
import { ListPropertyUser } from '../../components/ListPropertyUser/ListPropertyUser';

export const Profile = () => {

  const {emailUser} = useAuth();
  const [userEmail, setUserEmail] = useState("");
  const [userProperties, setUserProperties] = useState([]);
  const [laoding, setLoading] = useState(false);

  useEffect(() => {

        if (emailUser) {
            setUserEmail(emailUser.email); 
        }
    }, [emailUser, userProperties])

  const handleList = async () => {
      setLoading(true);
    try {
      const userProperties = await axios.post(`http://localhost:3000/property`,{
        userEmail
      })

      setUserProperties(userProperties.data);

    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <div className='lg:flex lg:justify-evenly lg:items-end lg:mb-24'>
        <div className=''>
          <h2 className="text-center text-2xl my-6 ">Profile</h2>
          <div className="flex flex-wrap justify-center">
            <div className="w-2/5 px-4 md:w-24 lg:w-40">
              <img src="https://i.postimg.cc/rFWNbhWZ/unnamed.png" alt="..." className="shadow rounded-full max-w-full h-auto align-middle border-none" />
            </div>
          </div>
        </div>

          <section className="">
            <div className="flex flex-col items-center lg:justify-end px-6 py-8 mx-auto md:h-72 lg:py-0 ">
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <button type="submit" className="w-full bg-emerald-400 text-white hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"><Link to={"/create-property"}>Create property</Link></button>
                        <button onClick={handleList} className='font-bold text-xl'>Show my property list</button>
                    </div>
                </div>
            </div>
          </section>
      </div>
        {
          laoding ? 
          <div className="border border-blue-100 shadow rounded-md p-4 mb-10 w-10/12 mx-auto">
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
          userProperties.length == 0 ?
          <div className='text-red-500 text-center mb-10 font-bold'>You don&apos;t have property!</div>
          :
          <ListPropertyUser userProperties={userProperties} handleList={handleList} />
        }
    </>
  )
}
