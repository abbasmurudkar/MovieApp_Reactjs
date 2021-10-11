import React from 'react'
import { Link } from 'react-router-dom';

const ShowsCard = ({id,name,summary,image}) => {
    const summarytext = summary ? `${summary.split(' ').slice(0,10).join(' ').replace(/<.+?>/g, '')}...`: "No description";
    return (
        <div>
            <div>
                <img src={image} alt="loading"/>
            </div>

            <h1>{name}</h1>
            <p>{summarytext}</p>

            <div>
                <Link to={`/show/${id}`}>Read more</Link>
                <button>Star me</button>
            </div>
        </div>
    )
}

export default ShowsCard
