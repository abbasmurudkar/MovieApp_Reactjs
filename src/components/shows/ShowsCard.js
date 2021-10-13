import React from 'react'
import { Link } from 'react-router-dom';
import { Styleshowcard } from './Showcard.style';

const ShowsCard = ({id,name,summary,image}) => {
    const summarytext = summary ? `${summary.split(' ').slice(0,10).join(' ').replace(/<.+?>/g, '')}...`: "No description";
    return (
        <Styleshowcard>
            <div className="img-wrapper">
                <img src={image} alt="loading"/>
            </div>

            <h1>{name}</h1>
            <p>{summarytext}</p>

            <div className="btns">
                <Link to={`/show/${id}`}>Read more</Link>
                <button>Star me</button>
            </div>
        </Styleshowcard>
    )
}

export default ShowsCard
