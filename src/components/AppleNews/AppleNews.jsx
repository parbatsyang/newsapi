import axios from 'axios';
import React, { useEffect, useState } from 'react'
import AppleCardDetails from './AppleCardDetails';
// import Categories from './Categories';

const AppleNews =() => {
    const [carNews,setCarNews] =useState([]);
    const [car,setCar] =useState('tesla');

    // calling funtion from useEffect and calling api 
    const getCarNews=async()=>{
    const response= await axios.get(`https://newsapi.org/v2/everything?q=${car}&from=2023-05-18&sortBy=publishedAt&apiKey=1c520c19fbfc45e7985c6ba844e52478`);
    setCarNews(response.data.articles)
    }

    // console.log(carNews);
    // using useEffect
    useEffect(()=>{
        getCarNews();
    },[]);
  return (
   
    
        <>
        <div className='flex justify-center'>
    <h1 className='text-3xl font-medium'>Select the Categories</h1>
        <select className='border border-spacing-1 border-black ms-5 rounded-xl'>
        <option value="">Select</option>
        <option value="category1" onClick={()=>(setCar('tesla'))}>Tesla</option>
        <option value="category2" onClick={()=>(setCar('mercedes'))}>Mercedes</option>
        <option value="category3" onClick={()=>(setCar('ford'))}>Ford</option>
      </select>
    </div>
  <div>
      <AppleCardDetails carnews={carNews}/>
      </div>
      </>
   
  )
}

export default AppleNews
