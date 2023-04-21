import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Perks from '../Perks';


const PlacesPage = () => {
    const {action} = useParams();
    const [title,setTitle] = useState('');
    const [address, setAddress] = useState('');
    const [addedPhotos, setAddedPhotos] = useState([]);
    const [photoLink, setPhotoLink] = useState('');
    const [description, setDescription] = useState('');
    const [perks, setPerks ] = useState('');
    const [extraInfo, setExtraInfo ] = useState('');
    const [checkIn, setCheckIn] = useState('');
    const [checkOut, setCheckOut] = useState('');
    const [maxGuests, setMaxGuests] = useState('');

const inputHeader = (text) => {
 return <h2 className='text-2xl mt-4'>{text}</h2>
}

const inputDescription = (text) => {
    return <p className='text-sm text-gray-500'>{text}</p>             
}

const preInput = (header, description) => {
    return (
        <>
        {inputHeader(header)}
        {inputDescription(description)}
        </>
    )
}

    
  return (
    <div>
        {action !== 'new' && (
                <div className="text-center">
               
                <Link to={'/account/places/new'} 
                className='inline-flex gap-2 bg-primary text-white py-2 px-6 rounded-full'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"  className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
    
                    Add new place
                </Link>
            </div>
        )}
        {action === 'new' && (
            <div> 
                <form>
                
                {preInput('Title','title for your place, should be short and catchy as in advertisments' )}
                <input type='text' placeholder='title, for example: my lovely apartment' value={title} onChange={(event => setTitle(event.targete.value))} />
                
                {preInput('Address','address for your place')}
                <input type='text' placeholder='address' value={address} onChange={(event => setAddress(event.targete.value))}/>

                {preInput('Photos', 'some lovely pictures')}
               
                <div className='flex gap-2'>   
                <input type='text' placeholder='add photos using a link ... jpg png ' value={photoLink} onChange={(event => setPhotoLink(event.targete.value))}/>  
                <button className='bg-gray-200 px-2 rounded-2xl gap-2' >Add&nbsp;Photos</button>
                </div>

                <div className='mt-2 grid grid-cols-3 gird md:grid-cols-4 lg:grid-cols-6'>
                <button className='flex justify-center gap-1 text-1xl text-gray-500 border rounded-2xl p-8 bg-transparent '>
                
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"  className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z" />
                </svg>Upload</button>
                </div>

                {preInput('Description', 'description of the place')}
                <textarea className='' value={description} onChange={(event => setDescription(event.targete.value))}/>
                
                
                {preInput('Perks','select all perks of your place')}
                <Perks selected={perks} onChange={setPerks} />
              
                
                {preInput('Extra Information','house rules, allowed things etc')}
                <textarea name="" id="" value={extraInfo} onChange={(event => setExtraInfo(event.targete.value))}></textarea>

                {preInput('Check In & Out Times, Max Guest','add your check in out times, remember to have some time for cleaning')}

                <div className='grid sm:grid-cols-3 gap-4'>
                <div>
                    <h3 className='mt-2 -mb-1'>Checkin Time</h3>
                    <input type="text" placeholder='14:00' value={checkIn} onChange={(event => setCheckIn(event.targete.value))}/>
                </div>
                <div>
                    <h3 className='mt-2 -mb-1'>Checkout Time</h3>
                    <input type="text" placeholder='20:30' value={checkOut} onChange={(event => setCheckOut(event.targete.value))}/>
                </div>
                <div>
                    <h3 className='mt-2 -mb-1'>Max Number of guests</h3>
                    <input type="text" value={maxGuests} onChange={(event => setMaxGuests(event.targete.value))}/>
                </div>

                </div>
                <div className=''>
                    <button className='primary my-4'>Save</button>
                </div>
                
                </form>
            </div>
           
        )}
        </div>
  )
}

export default PlacesPage