import React, { useEffect,useState } from 'react'
import { useParams } from'react-router-dom'
import { getapi } from '../../misc/Api';
const Showsid = () => {
    const {id} = useParams();
    const [show, setshow] = useState(null)
    const [isloading, setisloading] = useState(true)
    const [error, seterror] = useState(null)
    useEffect(()=>{

        let ismount = true;
getapi(`/shows/${id}?embed[]=seasons&embed[]=cast`).then(result=>{
        if(ismount){
            console.log(result)
            setshow(result)
            setisloading(false)
        }
})
.catch(err=>{
    if(ismount){
        seterror(err.message)
        setisloading(false)
    }
})
return () =>{
    ismount=false
}
    },[id])

if(isloading)
{
    return <div>Data is being Loaded</div>
}
if(error)
{
    return <div>Error Message:{error}</div>
}
    return (
        <div>
            this is show page
        </div>
    )
}

export default Showsid
