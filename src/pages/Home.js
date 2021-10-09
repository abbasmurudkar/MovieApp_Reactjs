import React from 'react'
import Mainpage from '../components/Mainpage'
import { useState } from 'react'
const Home = () => {
const [text, settext] = useState('')
const Inputtext = (e) =>{
settext(e.target.value)
}   
const Onsearch = () =>{
    fetch(`https://api.tvmaze.com/search/shows?q=${text}`).then(r=>r.json()).then(result=>{
        console.log(result)
    })
}
const onKeyDown = ev => {
   console.log(ev.KeyCode)
  };
    return (
        <Mainpage>
           <input type="text" onChange={Inputtext}  onKeyDown={onKeyDown} text={text}></input>
           <button type="button" onClick={Onsearch}>Search</button>
        </Mainpage>
    );
};
export default Home;
