import React from 'react'

const SearchBar = () => {
  return (
    <div className='flex border border-blue-300 rounded-full py-2 px-4 gap-2 shadow-md shadow-black-300'>
        <div>Anywhere</div>
        <div className='border border-l border-gray-300'></div>
        <div>Any week</div>
        <div className='border border-l border-gray-300'></div>
        <div>Add guests</div>
        <button className='bg-primary text-white p-1 rounded-full'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
        <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
        </svg>

        </button>
    </div>
  )
}

export default SearchBar