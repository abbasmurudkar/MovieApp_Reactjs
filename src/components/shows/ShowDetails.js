import React from 'react'
import { DetailsWrapper } from './ShowDetails.styled'

const ShowDetails = ({status,premiered,network}) => {
    return (
        <DetailsWrapper>
<p>
    status: <span>{status}</span>
</p>
<p>
    Premeired {premiered} {network? `on ${network.name}`:null}
</p>
        </DetailsWrapper>
    )
}

export default ShowDetails
