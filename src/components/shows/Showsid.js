import React, { useEffect,useState } from 'react'
import { useParams } from'react-router-dom'
import { getapi } from '../../misc/Api';
const Showsid = () => {
    const {id} = useParams();
    const [show, setshow] = useState(null)
    useEffect(()=>{
getapi(`/shows/${id}?embed[]=seasons&embed[]=cast`).then(result=>{
    console.log(result)
    setshow(result)
})
    },[id])

    return (
        <div>
            this is show page
        </div>
    )
}

export default Showsid
