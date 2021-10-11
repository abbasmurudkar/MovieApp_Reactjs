import React from 'react'
const ActorsCard = ({name,image,country,birthday,deathday,gender}) => {
    return (
        <div>
            <div>
                <img src={image} alt="loading"/>
            </div>

            <h1>
                {name}
                {gender ? `(${gender})` : null}
            
            </h1>
           <p>{country ? `Comes from ${country}`: 'No Country known'}</p>
           {birthday ? `Born On ${birthday}`: null}
            {deathday ? `Died ${deathday}`:'Alive'}
        </div>
    )
}

export default ActorsCard
