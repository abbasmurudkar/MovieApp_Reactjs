import React from 'react'

const ShowDetails = ({status,premiered,network}) => {
    return (
        <div>
            <h1>DETAILS</h1>
<p>
    status: <span>{status}</span>
</p>
<p>
    Premeired {premiered} {network? `on ${network.name}`:null}
</p>
        </div>
    )
}

export default ShowDetails
