import React from 'react';
import Logo from './Logo';
import SearchBar from './SearchBar';
import UserWidget from './UserWidget';


const NavBar = () => {
  return (
    <header className="flex justify-between">
        <Logo/>
        <SearchBar/>
        <UserWidget/>
    </header>
   
  )
}

export default NavBar