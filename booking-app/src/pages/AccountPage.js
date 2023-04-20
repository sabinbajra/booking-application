import React, { useContext } from 'react'
import { UserContext } from '../UserContext'
import { Link, Navigate, useParams } from 'react-router-dom';

const AccountPage = () => {

    const {ready, user} = useContext(UserContext);
    const {subpage} = useParams();

    if(!ready)
    {
        return 'Loading . . . ';
    }
    if(ready && !user){
        return <Navigate to={'/login'}/>
    }

    const linikClasses = (type=null) => {
        let classes = 'py-2 px-6';
        if(type === subpage || (subpage === undefined && type === 'profile'))
        {
            classes += ' bg-primary text-white rounded-full';
        }
        return classes;
    }
    
  return (
    <div> 
        <nav className='w-full flex justify-center mt-8 gap-4'>
            <Link className={linikClasses('profile')} to={'/account'}>My Profile</Link>
            <Link className={linikClasses('bookings')} to={'/account/bookings'}>My Booking</Link>
            <Link className={linikClasses('places')} to={'/account/places'}>My Accomodations</Link>
          
        </nav>
    </div>
  )
}

export default AccountPage
