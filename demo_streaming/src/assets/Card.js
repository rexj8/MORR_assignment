import React from 'react'
import "./card.css"


function Card(props) 
{
    return (
        <div className="card">
            <img src={props.url} alt={props.alt} key={props.url}/>
            <h5>{props.title}</h5>
        </div>
    )
}

export default Card
