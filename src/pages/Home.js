import React from 'react'
import Mainpage from '../components/Mainpage'
import { useState } from 'react'
import {getapi} from '../misc/Api'
const Home = () => {
    const [text, settext] = useState('')
    const [result, setresult] = useState(null)
    const [actors, setactors] = useState('shows')
    const ischecked = actors === "shows";
    const Inputtext = (e) => {
        settext(e.target.value)
    }
    const Onsearch = () => {
        getapi(`/search/${actors}?q=${text}`).then((result)=>{
        // fetch(`https://api.tvmaze.com/search/shows?q=${text}`).then(r => r.json()).then(result => {
        //     console.log(result)
            setresult(result)
        })
    }
    const onKeyDown = ev => {
        console.log(ev.KeyCode)
    };
    const DisplayResult = () => {
        if (result && result.length === 0) {
            return(
            <div>No Matches Found</div>
            )
        }
        if (result && result.length > 0) {
           return result[0].show ? result.map((items)=>{
            return(
                <div key={items.show.id}>
                    {items.show.name}
                </div>
            )
        }):
        result.map((items)=>{
            return(
                <div key={items.person.id}>
                    {items.person.name}
                </div>
            )
        })
        }
    }
    const onRadiochange = (ev) =>{
setactors(ev.target.value)
    }
    console.log(actors)
    return (
        <Mainpage>
            <input type="text" placeholder="Search here" onChange={Inputtext} onKeyDown={onKeyDown} text={text}></input>
            <button type="button" onClick={Onsearch}>Search</button>
            {DisplayResult()}
            <div>
                <label htmlFor="show-movies">
                    Movie
                    <input type="radio" id="show-movies"checked={ischecked} onChange={onRadiochange} value="shows"/>
                </label>
                <label htmlFor="show-actors">
                    Actors
                    <input type="radio" id="show-actors" checked={!ischecked} onChange={onRadiochange} value="people"/>
                </label>
            </div>
        </Mainpage>
    );
};
export default Home;
