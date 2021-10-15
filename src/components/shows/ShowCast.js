import React from 'react'
import IMAGE_NOTFOUND from '../../assets/image.png'
import { CastList } from './ShowCast.styled'
const ShowCast = ({cast}) => {
    return (
        <CastList>
            {cast.map(({person,voice,character},key)=>{
                return(
                <div key={key} className="cast-item">
                    <div className="pic-wrapper">
                        <img src={person.image ? person.image.medium:IMAGE_NOTFOUND} alt="CAST-PERSON"/>
                    </div>
                    <div className="actor">
                        <span>
                            <span className="bold">{person.name}</span>| {character.name}  {voice? '|Voice':"| No voice"}
                        </span>
                    </div>

                </div>
                )
            })}
        </CastList>
    )
}

export default ShowCast
