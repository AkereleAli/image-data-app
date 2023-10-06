import React from 'react'
import './searchbar.css'

const CardHolder = ({id,title,description,image}) => {
    console.log(title,'title')
    return (
        <div className='parent'>
            <div className='card'>
                <img src={image} alt="" className='imgcard'/>
                <h1 className='headone'>{title}</h1>
                <p className='pone'>{description}</p>
                {/* <p className='pnum'>{rating.rate}</p> */}
            </div>
        </div>
    )
}

export default CardHolder