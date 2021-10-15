import React from 'react'
import IMAGE_NOTFOUND from '../../assets/image.png'
const ShowCast = ({cast}) => {
    return (
        <div>
            <h1>CAST</h1>
            {cast.map(({person,voice,character},key)=>{
                return(
                <div key={key}>
                    <div>
                        <img src={person.image ? person.image.medium:IMAGE_NOTFOUND} alt="CAST-PERSON"/>
                    </div>
                    <div>
                        <span>
                            {person.name} | {character.name}  {voice? '|Voice':"| No voice"}
                        </span>
                    </div>

                </div>
                )
            })}
        </div>
    )
}

export default ShowCast
