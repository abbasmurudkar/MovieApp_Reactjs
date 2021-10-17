import React from 'react'
import Mainpage from '../components/Mainpage'
import { useState } from 'react'
import {getapi} from '../misc/Api'
import ShowsGrid from '../components/shows/ShowsGrid';
import ActorsGrid from '../components/actors/ActorsGrid';
import { useLastQuery } from '../misc/Custom-hooks';
const Home = () => {
const [text, settext] = useLastQuery()  //previously it was usestate
const [results, setresult] = useState(null)
const [searchoptions, setsearchoptions] = useState('shows')
const ischecked = searchoptions === "shows";
const Inputtext = (ev)=>{
    settext(ev.target.value)
}
const OnSearch = ()=>{
    getapi(`/search/${searchoptions}?q=${text}`).then(result=>{
        setresult(result)
        console.log(result)
    })
    // fetch(`https://api.tvmaze.com/search/shows?q=${text}`).then((r)=>r.json()).then((result)=>{
        // console.log(result)
}
const onkeydown = (ev) =>{
    if(ev.keyCode === 13)
    {
        OnSearch()
    }
}
const DisplayResult = ()=>{
if(results && results.length === 0)
{
    return(
        <div>No mathces found</div>
    )
}
if(results && results.length > 0)
{
    return results[0].show ? <ShowsGrid data={results}/>:<ActorsGrid data={results}/>
}
return null
}
const radiochange = (ev) =>{
    setsearchoptions(ev.target.value)
}
console.log(searchoptions)
    return (
        <Mainpage>
            <input type="text" onChange={Inputtext} text={text} onKeyDown={onkeydown} ></input>
            <button type="button" onClick={OnSearch}>Search</button>
            {DisplayResult()}
            <div>
            <label htmlFor="search-movies">
                Movies
                <input id="search-movies" checked={ischecked} type="radio" value="shows" onChange={radiochange} />
            </label>
            <label htmlFor="search-actors">
                Actors
                <input id="search-actors" checked={!ischecked}type="radio" value="people" onChange={radiochange}/>
            </label>
            </div>
        </Mainpage>
    );
};
export default Home;
