import React from 'react'
import Not_Found from '../../assets/image.png'
import { FlexGird } from '../Styled'
import ActorsCard from './ActorsCard'
const ActorsGrid = ({data}) => {
    return (
        <FlexGird>
            {
                data.map((item)=>{
                  return  <ActorsCard key={item.person.id} country={item.person.country ? item.person.country.name : null } gender={item.person.gender} deathday={item.person.deathday} birthday={item.person.birthday} name={item.person.name} image={item.person.image ? item.person.image.medium : Not_Found}/>
                })
            }
        </FlexGird>
    )
}

export default ActorsGrid
