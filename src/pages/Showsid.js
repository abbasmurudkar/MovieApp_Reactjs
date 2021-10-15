import React, { useEffect, useReducer } from 'react'
import { useParams } from 'react-router-dom'
import { getapi } from '../misc/Api';
import ShowCast from '../components/shows/ShowCast';
import ShowDetails from '../components/shows/ShowDetails';
import ShowMainData from '../components/shows/ShowMainData';
import ShowSeason from '../components/shows/ShowSeason';
import { InfoBlock, ShowPageWrapper } from './show.styled';
const Showsid = () => {
    const { id } = useParams();

    const reducer = (prevstate, action) => {
        switch (action.type) {
         case 'FETCH_SUCCESS':{
             return {isloading: false,error:null, show: action.show}
         }
         case 'FETCH_FAILED':{
             return {...prevstate,error:action.error,isloading:false}
         }
            default: return prevstate
        }
    }
    const initialState = {   //three states in one reducer show isloading error
        show: null,
        isloading: true,
        error: null
    }
    const [{show,isloading,error}, dispatch] = useReducer(reducer, initialState)    //instead of managing the single state for all use common state reducer to use one state
    // const [show, setshow] = useState(null)
    // const [isloading, setisloading] = useState(true)
    // const [error, seterror] = useState(null)
    useEffect(() => {

        let ismount = true;
        getapi(`/shows/${id}?embed[]=seasons&embed[]=cast`).then(result => {
            if (ismount) {
                // console.log(result)
                dispatch({type:'FETCH_SUCCESS',show:result})
                // setshow(result)
                // setisloading(false)
            }
        })
            .catch(err => {
                if (ismount) {
                    dispatch({type:'FETCH_FAILED',error:err.message})
                    // seterror(err.message)
                    // setisloading(false)
                }
            })
        return () => {
            ismount = false
        }
    }, [id])
console.log(show)
    if (isloading) {
        return <div>Data is being Loaded</div>
    }
    if (error) {
        return <div>Error Message:{error}</div>
    }
    return (
        <ShowPageWrapper>
            <ShowMainData image={show.image} name={show.name} rating={show.rating} tags={show.genres} summary={show.summary} />
            <InfoBlock>
            <h2>Details</h2>
                <ShowDetails status={show.status} premiered={show.premiered} network={show.network}/>
            </InfoBlock>
            <InfoBlock>
            <h2>Seasons</h2>
                <ShowSeason seasons={show._embedded.seasons}/>
            </InfoBlock>
            <InfoBlock>
            <h2>Cast</h2>
                <ShowCast cast={show._embedded.cast}/>
            </InfoBlock>
        </ShowPageWrapper>
    )
}

export default Showsid
