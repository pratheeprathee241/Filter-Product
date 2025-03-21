import React from 'react'
import Main from './Main';
import Recommended from "./Recommended/Recommended";
import Navigation from "./Navigation/Nav";
import Products from "./Products/Products";

export const Home = ({handleChange,query,handleInputChange,handleClick,result}) => {
  return (
    <div className='text-center'>
      <Main handleChange={handleChange} />
      <Navigation query={query} handleInputChange={handleInputChange} />
      <Recommended handleClick={handleClick} />
      <Products result={result}/>
    </div>
  )
}
