import React from 'react'
import { StyledActorcard } from './Actorscard.style'
const ActorsCard = ({name,image,country,birthday,deathday,gender}) => {
    return (
        <StyledActorcard>
            <div className="img-wrapper">
                <img src={image} alt="loading"/>
            </div>

            <h1>
                {name}
                {gender ? `(${gender})` : null}
            
            </h1>
           <p className="deathday">{country ? `Comes from ${country}`: 'No Country known'}</p>
           {birthday ? `Born On ${birthday}`: null}
            {deathday ? `Died ${deathday}`:'Alive'}
        </StyledActorcard>
    )
}

export default ActorsCard
