import React, { useEffect, useState } from 'react'
import Mainpage from '../components/Mainpage'
import { useShows } from '../misc/Custom-hooks'
import {getapi} from '../misc/Api'
import ShowsGrid from '../components/shows/ShowsGrid'
const Starred = () => {
    const [starred] = useShows()

    const [show,setshow] = useState(null)
    const[isloading,setisloading] = useState(true)
    const[error,seterror] = useState(null)
    useEffect(() => {
        if(starred && starred.length > 0)
        {
        //     const promises = starred.map(showId => getapi(`/shows/${showId}`));
        //     Promise.all(promises).then(apiData => apiData.map(show => ({show}))).then(results=>{
        //      console.log("result",results)
        //      setshow(results)
        //      setisloading(false)
        //  }).catch(err=>{
        //      seterror(err.message)
        //      setisloading(false)

        //  })
        const promises = starred.map(showId => getapi(`/shows/${showId}`))
        Promise.all(promises)
        .then((apiData)=>apiData.map(show=>({show})))
        .then(result=>{
            console.log(result)
            setshow(result)
            setisloading(false)
        })
        .catch(err=>{
            seterror(err.message)
            setisloading(false)
        })
        }
        else
        {
            setisloading(false);
        }
        return () => {
        }
    }, [starred])
    return (
        <Mainpage>
        {/* {isloading && <div>Shows are still loading</div>}
      {error && <div>Error occured: {error}</div>}
      {!isloading && !show && <div>No shows were added</div>}
      {!isloading && !error && show && <ShowsGrid data={show} />} */}
      {isloading && <div>SHOW ARE LOADING</div>}
      {error && <div>ERROR OCCURRED :{error}</div>}
      {isloading && !error && <div>NO SHOWS ARE STARRED</div>}
      {!isloading && !error && <ShowsGrid data={show}/>}
        </Mainpage>
    )
}

export default Starred
