import React, { useContext, useState } from 'react'
import { UserContext } from '../UserContext'
import { Link, Navigate, useParams } from 'react-router-dom';
import axios from 'axios';

const AccountPage = () => {
    const [redirect,setRedirect] = useState(null);
    const {ready, user, setUser} = useContext(UserContext);
    let {subpage} = useParams();

    if(subpage === undefined)
    {
        subpage = 'profile';
    }


    //function logout reset the cookies
    const logout = async () => {
        console.log("Loggin out");
        await axios.post('logout');
        
        setRedirect('/');
        setUser(null);

    }
    if(!ready)
    {
        return 'Loading . . . ';
    }
    if(ready && !user && !redirect){
        return <Navigate to={'/login'}/>
    }

    const linikClasses = (type=null) => {
        let classes = 'py-2 px-6';
        if(type === subpage)
        {
            classes += ' bg-primary text-white rounded-full';
        }
        return classes;
    }
  
  if(redirect){
    
        return <Navigate to={redirect}></Navigate>
  }
    
  return (
    <div> 
        <nav className='w-full flex justify-center mt-8 gap-4 mb-8'>
            <Link className={linikClasses('profile')} to={'/account'}>My Profile</Link>
            <Link className={linikClasses('bookings')} to={'/account/bookings'}>My Booking</Link>
            <Link className={linikClasses('places')} to={'/account/places'}>My Accomodations</Link>
          
        </nav>

        {subpage === 'profile' && (
            <div className="text-center max-w-lg mx-auto" >
                Logged in as {user.name} ({user.email}) <br />
                <button onClick={logout} className="primary max-w-sm mt-2">Logout</button>
            </div>  
        )}
        
    </div>
  )
}

export default AccountPage
