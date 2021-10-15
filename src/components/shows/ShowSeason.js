import React from 'react'

const ShowSeason = ({seasons}) => {
    return (
        <div>
            <h1>SEASONS</h1>
            <p>
            Seasons in total: <span>{seasons.length}</span>
            </p>
            <p>
                Episodes in total: {' '}
                <span>
                    {seasons.reduce((accee,seasons)=> accee + seasons.episodeOrder,0)}  {/*total number of episodes by using reduce*/}
                </span>
            </p>
            <div>
                {seasons.map((season)=>{
                    return(
                    <div key={season.id}>
                        <div>
                            <p>{season.number}</p>
                            <p>
                                Episode:<span>{season.episodeOrder}</span>
                            </p>
                        </div>
                        <div>
                            Aired : {' '}
                            <span>
                                {season.premiereDate} - {season.endDate}
                            </span>
                        </div>
                    </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ShowSeason
