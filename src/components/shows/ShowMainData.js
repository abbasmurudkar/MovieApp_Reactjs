import React from 'react'
import IMAGE_NOTFOUND from '../../assets/image.png'
import { Star } from '../Styled'
const ShowMainData = ({name,image,rating,summary,tags}) => {
    return (
        <div>
           <img src={image ? image.original : IMAGE_NOTFOUND} alt="Images" />
           <div>
               <div>
                   <h1>{name}</h1>
                   <div>
                       <Star/>
                       <span>{rating.average || "N/A"}</span>
                   </div>
               </div>
               <div dangerouslySetInnerHTML={{__html:summary}}></div>
               <div>
                   Tags:{' '}
                   <div>
                       {tags.map((tag,i)=>{
                           return <span key={i}>{tag}</span>
                       })}
                   </div>
               </div>
           </div>
        </div>

    )
}

export default ShowMainData
