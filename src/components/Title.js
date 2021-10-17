import React,{memo} from 'react'  //the memo function is used when we dont wont render anything again agian when component mount here the title is rerendering when we upadating the input 
import { TitleWrapper } from './Title.styled'

const Title = ({title, subtitle}) => {
    console.log("render")
    return (
        <TitleWrapper>
            <h1>{title}</h1>
            <p>{subtitle}</p>
        </TitleWrapper>
    )
}

export default memo(Title)
