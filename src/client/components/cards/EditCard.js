/* global chrome */

import React, { useState, useEffect, useRef, useContext } from 'react'
import styled, {keyframes} from 'styled-components'
import { Divider, Drawer, List, ListItem, ListSubheader, IconButton, TextField} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'
import {Remove, Close, Check } from '@material-ui/icons'
import { fetchTitle } from '../../../main/src/utils/fetchTitle';
import UrlNotFound from '../utils/UrlNotFound';
import { usePrevious } from '../utils/usePrevious';
import { useOnScreen } from '../utils/useOnScreen';
import { Context } from '../../../store';

const TField = styled(TextField)`
`

const Header = styled.h2`
  text-align: left;

`

const HeadContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  margin: 3px 10px 3px 15px;
`
const Title = styled.p`
  font-size: 1.5em !important;
  font-family: "Open Sans" !important;

`
const colorOut = keyframes`
  from {background-color: green;}
  to {background-color: white;}
`

const RemoveItem = styled(ListItem)`
  &.new{
    background-color: green;
    &.isVisible{
      animation: ${colorOut} ease 2s 1;
      animation-fill-mode: forwards
    }
  }
`


const EditCard = (props) => {
  const [newName, updateSeshName] = useState(null)
  const [addUrl, updateUrl] = useState(null);
  const [modalOpen, setModal] = useState(false)
  const [diff, setDiff] = useState(null);
  const {state, dispatch} = useContext(Context);
  const prev = usePrevious(state.sessions[props.name])
  const myRef = useRef();
  const onScreen = useOnScreen(myRef);
  const classes = makeStyles(iconStyles)();
  function iconStyles() {
    return {
      successIcon: {
        color: 'green',
      },
      errorIcon: {
        color: 'red',
      },
    }
  }

  const updateName = async () => {
    await chrome.storage.sync.remove([props.name]);
    await chrome.storage.sync.set({
      [newName]: state.sessions[props.name]
    })
    updateSeshName('');
    props.toggleDrawer(false);
  }

  const removeTabs = (title) => {
    let newSesh = [];
    state.sessions[props.name].forEach((tab) => {
      if (tab.title !== title) {
        newSesh.push(tab)
      }
    })

    dispatch({type: "REMOVE_TAB", payload: {name: props.name, session: newSesh}});
    chrome.storage.sync.set({
      [props.name]: newSesh
    })
  }


  const addTab = () => {
    fetchTitle(addUrl, (content) => {
      if (content !== 404) {
        chrome.storage.sync.set({ [props.name]: [...state.sessions[props.name], content] })
        dispatch({type: "ADD_TAB", payload: {name: props.name, url: content}})
        updateUrl('')
      }
      else {
        setModal(true)
      }
    })
  }

  useEffect(()=> {
    if(prev !== undefined){
      const differ = state.sessions[props.name].filter(tab => !prev.includes(tab))
      setDiff(differ[0]);
    }
  }, [state.sessions[props.name]])

  useEffect(()=> {
    if(onScreen === true){
      return function cleanup(){
        setDiff(null);
      }
    }
  }, [onScreen])

  return (
    <Drawer anchor="left" open={props.open}>
      <div>
        <HeadContainer>
          <Header>{`Edit ${props.name}`}</Header>
          <IconButton onClick={() => props.toggleDrawer(false)}>
            <Close />
          </IconButton>
        </HeadContainer>

        <Divider />

        <List subheader={<ListSubheader disableSticky>Change Session Name</ListSubheader>}>
          <ListItem>
            <TField id="outlined-basic" label="Rename Session" variant="outlined" size="small" value={newName} onChange={(e) => updateSeshName(e.target.value)} />
            <IconButton className={(newName === null || newName === '') ? 'null' : classes.successIcon} disabled={newName === null || newName === ''} onClick={updateName}>
              <Check />
            </IconButton>
          </ListItem>
        </List>

        <Divider />

        <List subheader={<ListSubheader disableSticky>Add a Tab</ListSubheader>}>
          <ListItem>
            <TField id="outlined-basic" label="Tab URL" variant="outlined" size="small" value={addUrl} onChange={(e) => updateUrl(e.target.value)} />
            <IconButton className={(addUrl === null || addUrl === '') ? 'null' : classes.successIcon} disabled={addUrl === null || addUrl === ''} onClick={() => addTab()}>
              <Check />
            </IconButton>
          </ListItem>
          <UrlNotFound toggleModal={setModal} open={modalOpen} />
        </List>

        <Divider />

        <List subheader={<ListSubheader disableSticky>Saved Tabs</ListSubheader>}>
          {state.sessions[props.name].map((tab) => (
            <RemoveItem ref={diff && (tab.title === diff.title ? myRef : null)} className={diff && (tab.title === diff.title ? (onScreen ? 'new isVisible' : 'new') : null)}>
              <IconButton size='medium' className={classes.errorIcon} onClick={() => removeTabs(tab.title)}>
                <Remove />
              </IconButton>
              <Title>{tab.title.length > 15 ? tab.title.substring(0, 15) + '...' : tab.title}</Title>
            </RemoveItem>
          ))}
        </List>
      </div>
    </Drawer>
  )

}

export default EditCard;
