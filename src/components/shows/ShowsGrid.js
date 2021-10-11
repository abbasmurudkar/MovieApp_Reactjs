import React from 'react'
import ShowsCard from './ShowsCard'
import Image_Not_Found from '../../assets/image.png'
const ShowsGrid = ({data}) => {
    return (
        <div>
             {
                data.map((item)=> { //we can also use this instead of item (({show})) so we can write show instead of item
                    return <ShowsCard key={item.show.id} id={item.show.id} name={item.show.name} image={item.show.image ? item.show.image.medium : Image_Not_Found}  summary={item.show.summary}/>
                })
            }
        </div>
    )
}

export default ShowsGrid