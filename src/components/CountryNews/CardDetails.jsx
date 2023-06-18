import React from 'react'
import Card from "./Card"
import "./news.css"

const CardDetails = ({news}) => {
  return (
   
       <div className='media-scroller gap-44'>
           
              {news.map((n,i)=>{
                return (
                  <div>
                <Card n={n} key={n.title}/>
                </div>
            )
            })}
          </div>
  )
}

export default CardDetails
