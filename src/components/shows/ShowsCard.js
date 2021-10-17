import React,{memo} from 'react'
import { Link } from 'react-router-dom';
import { Star } from '../Styled';
import { Styleshowcard } from './Showcard.style';

const ShowsCard = ({id,name,summary,image,onStarclick,isStarred}) => {
    const summarytext = summary ? `${summary.split(' ').slice(0,10).join(' ').replace(/<.+?>/g, '')}...`: "No description";
    console.log("results")
    return (
        <Styleshowcard>
            <div className="img-wrapper">
                <img src={image} alt="loading"/>
            </div>

            <h1>{name}</h1>
            <p>{summarytext}</p>

            <div className="btns">
                <Link to={`/show/${id}`}>Read more</Link>
                <button onClick={onStarclick}><Star active={isStarred}/></button>
            </div>
        </Styleshowcard>
    )
}

export default memo(ShowsCard)
