import React from 'react'
import ShowsCard from './ShowsCard'
import Image_Not_Found from '../../assets/image.png'
import { FlexGird } from '../Styled'
import { useShows } from '../../misc/Custom-hooks'
const ShowsGrid = ({ data }) => {
    const [staredShow, dispatchstarred] = useShows()
    return (
        <FlexGird>
            {
                data.map((item) => { //we can also use this instead of item (({show})) so we can write show instead of item
                    const isStarred = staredShow.includes(item.show.id)
                    const onStarclick = () => {
                        if (isStarred) {
                            dispatchstarred({ type: "REMOVE", showId: item.show.id })
                        }
                        else {
                            dispatchstarred({ type: "ADD", showId: item.show.id })
                        }
                    }
                    return (
                        <ShowsCard key={item.show.id} isStarred={isStarred} onStarclick={onStarclick} id={item.show.id} name={item.show.name} image={item.show.image ? item.show.image.medium : Image_Not_Found} summary={item.show.summary} />
                    )
                })
            }
        </FlexGird>
    )
}

export default ShowsGrid
