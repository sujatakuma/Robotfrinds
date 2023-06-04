import React from 'react'

const Card = (props) => {
    const {Name, email,id}=props
  return (
    <>
    
    <div className='tc bg-light-green dib br3 pr3 ma2 grow bw2 shadow-5'>
      <img src={`https://robohash.org/${id}?200*200`} alt="robots" srcset="" />
      <h1>{Name}</h1>
      <h2>{email}</h2>
    </div>
    </>
  )
}

export default Card
