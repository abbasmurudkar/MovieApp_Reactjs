import React from 'react'
import IMAGE_NOTFOUND from '../../assets/image.png'
import { Star } from '../Styled'
import { Headline, MainDataWrapper, TagList } from './ShowMain.styled'
const ShowMainData = ({name,image,rating,summary,tags}) => {
    return (
        <MainDataWrapper>
           <img src={image ? image.original : IMAGE_NOTFOUND} alt="Images" />
           <div className="text-side">
               <Headline>
                   <h1>{name}</h1>
                   <div>
                       <Star active/>
                       <span>{rating.average || "N/A"}</span>
                   </div>
               </Headline>
               <div className="summary" dangerouslySetInnerHTML={{__html:summary}}></div>
               <div>
                   Tags:{' '}
                   <TagList>
                       {tags.map((tag,i)=>{
                           return <span key={i}>{tag}</span>
                       })}
                   </TagList>
               </div>
           </div>
        </MainDataWrapper>

    )
}

export default ShowMainData
