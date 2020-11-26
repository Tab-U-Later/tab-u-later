/* global chrome */
import {useEffect, useReducer, useState} from 'react'
import "fontsource-open-sans";
import './App.css';
import AddPage from '../src/client/components/pages/AddPage';
import {Context, reducer} from './store'
import SessionPage from '../src/client/components/pages/SessionPage';
import { getStorageData } from './client/components/utils/storage';

function App() {
  const initialState= {sessions : {}}

  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Context.Provider value={{state , dispatch}}>
      <SessionPage/>
      <AddPage/>
    </Context.Provider>
  );
}

export default App;
