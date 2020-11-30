import {createContext} from 'react'


export const Context = createContext();

export function reducer(state, action){
    switch(action.type){
        case "SET_SESSIONS":
            return {sessions: action.payload};
        case "ADD_SESSION":
            return {...state, sessions: {...state.sessions, [action.payload.seshName]: action.payload.session}};
        case "REMOVE_SESSION":
            let newSessions = state.sessions;
            delete newSessions[action.payload];
            return {...state, sessions: newSessions};
        case "UPDATE_NAME":
            let temp = state.sessions[action.payload.name]
            delete state.sessions[action.payload.name]
            return {...state, sessions: {...state.sessions, [action.payload.newName]: temp}}
        case "ADD_TAB":
            return {...state, sessions: {...state.sessions, [action.payload.name]: [...state.sessions[action.payload.name], action.payload.url]}}
        case "REMOVE_TAB":
            return {...state, sessions: {...state.sessions, [action.payload.name]: action.payload.session}}
    }
}
