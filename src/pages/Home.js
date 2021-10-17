import React, { useCallback } from 'react'
import Mainpage from '../components/Mainpage'
import { useState } from 'react'
import { getapi } from '../misc/Api'
import ShowsGrid from '../components/shows/ShowsGrid';
import ActorsGrid from '../components/actors/ActorsGrid';
import { useLastQuery } from '../misc/Custom-hooks';
import { RadioInputsWrapper, SearchButtonWrapper, SearchInput } from './Home.styled';
import CustomRadio from '../components/CustomRadio';
const Home = () => {
    const [input, setinput] = useLastQuery()  //previously it was usestate
    const [results, setresult] = useState(null)
    const [searchoptions, setsearchoptions] = useState('shows')
    const ischecked = searchoptions === "shows";
    const Inputtext = (ev) => {
        setinput(ev.target.value)
    }
    const OnSearch = () => {
        getapi(`/search/${searchoptions}?q=${input}`).then(result => {
            setresult(result)
            console.log(result)
        })
        // fetch(`https://api.tvmaze.com/search/shows?q=${text}`).then((r)=>r.json()).then((result)=>{
        // console.log(result)
    }
    const onkeydown = (ev) => {
        if (ev.keyCode === 13) {
            OnSearch()
        }
    }
    const DisplayResult = () => {
        if (results && results.length === 0) {
            return (
                <div>No mathces found</div>
            )
        }
        if (results && results.length > 0) {
            return results[0].show ? <ShowsGrid data={results} /> : <ActorsGrid data={results} />
        }
        return null
    }
    const radiochange = useCallback(  (ev) => { 
        setsearchoptions(ev.target.value)
    },[]) 
     
    // console.log(searchoptions)
    return (
        <Mainpage>
            <SearchInput
            type="text" 
            onChange={Inputtext} 
            value={input} 
            onKeyDown={onkeydown} 
            />
            <RadioInputsWrapper>
                <div>
                    <CustomRadio
                    label="Shows"
                        id="search-movies"
                        checked={ischecked}
                        onChange={radiochange}
                        value="shows"
                    />
                </div>
                <div>
                <CustomRadio
                    label="Actors"
                        id="search-actors"
                        checked={!ischecked}
                        onChange={radiochange}
                        value="people"
                    />
                </div>
            </RadioInputsWrapper>
            <SearchButtonWrapper>
                <button type="button" onClick={OnSearch}>Search</button>
            </SearchButtonWrapper>
            {DisplayResult()}
        </Mainpage>
    );
};
export default Home;
