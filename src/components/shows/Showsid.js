import React, { useEffect, useState, useReducer } from 'react'
import { useParams } from 'react-router-dom'
import { getapi } from '../../misc/Api';
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
    const [state, dispatch] = useReducer(reducer, initialState)    //instead of managing the single state for all use reducer to use one state
    // const [show, setshow] = useState(null)
    // const [isloading, setisloading] = useState(true)
    // const [error, seterror] = useState(null)
    useEffect(() => {

        let ismount = true;
        getapi(`/shows/${id}?embed[]=seasons&embed[]=cast`).then(result => {
            if (ismount) {
                console.log(result)
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
console.log(state)
    // if (isloading) {
    //     return <div>Data is being Loaded</div>
    // }
    // if (error) {
    //     return <div>Error Message:{error}</div>
    // }
    return (
        <div>
            this is show page
        </div>
    )
}

export default Showsid
