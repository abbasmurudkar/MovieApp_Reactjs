import { useReducer, useEffect } from "react";

function showsReducer(prevstate,action){
switch(action.type)
{
    case "ADD":{
        return [...prevstate,action.showId]
    }
    case "REMOVE":{
        return prevstate.filter(showId=>showId!==action.showId)
    }

    default : return prevstate
}
}

function usePersistedReducer(initialState, reducer, key) {

    const [state, dispatch] = useReducer(reducer, initialState, (initial) => {
        const persisted = localStorage.getItem(key);

        return persisted ? JSON.parse(persisted) : initial
    })

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(state))
    }, [state, key])
    return [state, dispatch];
}
export function useShow(key='shows'){
return usePersistedReducer(showsReducer,[],key)
}

