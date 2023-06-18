import React, { useEffect,useState } from 'react'
import axios from 'axios';
// import Cards from "./Card"
import CardDetails from './CardDetails';

const News = () => {
    const [country,setCountry]=useState('');
    const [news,setNews] =useState([]);
    const [finalNews,setFinalNews]=useState('');
    
    const getData=async()=>{
      const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=${country}&category=business&apiKey=1c520c19fbfc45e7985c6ba844e52478`);
      setNews(response.data.articles);
    }

    useEffect(()=>{
        getData();
    },[finalNews]);
   
    const changeHandler=(e)=>{
      setCountry(e.target.value);
    }
      const submitHandler=(e)=>{
        e.preventDefault();
        setFinalNews(country);
      }
    return (
    <div>
      <form onSubmit={submitHandler}>
      <input type='text' value={country} onChange={changeHandler} className='border border-spacing-3 border-y-gray-600 rounded-lg ms-5'/>
      <button className='w-14 bg-blue-500'>Search</button>
      </form>
          
           <CardDetails news={news}/>
      
    </div>
  )
}
export default News;


