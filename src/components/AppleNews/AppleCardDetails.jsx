import React from 'react'
import AppleCard from './AppleCard'
import "./carnews.css"

const AppleCardDetails = ({carnews}) => {
  return (
    <div className='media gap-44'>
      {
        carnews.map((cnews,index)=>{
            return(
                <AppleCard key={index} cnews={cnews}/>
            )
        })
      }
    </div>
  )
}

export default AppleCardDetails
