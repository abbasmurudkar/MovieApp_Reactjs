import React from 'react'
import { SeasonList, SeasonsWrapper } from './ShowSeason.styled'

const ShowSeason = ({seasons}) => {
    return (
        <SeasonsWrapper>
            <p>
            Seasons in total: <span>{seasons.length}</span>
            </p>
            <p>
                Episodes in total: {' '}
                <span>
                    {seasons.reduce((accee,seasons)=> accee + seasons.episodeOrder,0)}  {/*total number of episodes by using reduce*/}
                </span>
            </p>
            <SeasonList>
                {seasons.map((season)=>{
                    return(
                    <div key={season.id} className="season-item">
                        <div className="left">
                            <p>{season.number}</p>
                            <p>
                                Episode:<span>{season.episodeOrder}</span>
                            </p>
                        </div>
                        <div className="right">
                            Aired : {' '}
                            <span>
                                {season.premiereDate} - {season.endDate}
                            </span>
                        </div>
                    </div>
                    )
                })}
            </SeasonList>
        </SeasonsWrapper>
    )
}

export default ShowSeason
