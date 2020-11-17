/* global chrome */

import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Fab from '@material-ui/core/Fab';
import {Add, Close, Done} from '@material-ui/icons';
import { Divider, Drawer, List, ListItem, ListSubheader, FormControlLabel, Checkbox, IconButton, Button, TextField } from '@material-ui/core';


const FButton = styled(Fab)`
  position: fixed !important;
  top: 400px;
  left: 320px;
  right: 20px;
`

const TField = styled(TextField)`
  position: relative;
  margin: 15px 10px !important;
`

const ButtonContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  margin: 15px 0px;
`

const Header = styled.h2`
  text-align: left;
  margin-left: 5px;
`

const HeadContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  padding-bottom: 5px;
`

const Container2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 10px 0px;
`


const AddPage = () => {
  const [open, setOpen] = useState(false);
  const [tabs, setTabs] = useState(null);
  const [selections, setSelections] = useState({});
  const [isDone, setDone] = useState(false);
  const [selAll, setSelAll] = useState(false);
  const [seshName, setSeshName] = useState(null);

  const toggleDrawer = (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setOpen(!open);
  };

  const getTabs = async () => {
    await chrome.tabs.query({ currentWindow: true }, function (result) {
      setTabs(result);
    })
  }

  const handleChange = (event) => {
    setSelections({...selections, [event.target.name]: event.target.checked})
  }

  const addSession = async () => {
    setOpen(false);
    let session = [];
    for(const key in selections){
      if(selections[key] === true){
        session.push(key);
      }
    }
    await chrome.storage.sync.set({[seshName]: session}, function(){
      console.log("set storage")
    });
  }

  useEffect(() => {
    getTabs();
    let anyChecked = selAll;
    for(const key in selections){
      if(selections[key] === true){
        anyChecked = true;
      }
    }
    setDone(anyChecked && seshName!==null && seshName!=='')
  })

  return (
    <div>
      <FButton onClick={(event) => toggleDrawer(event)} color='primary' aria-label='add'>
        <Add />
      </FButton>
      <Drawer anchor="left" open={open}>
        {tabs ?
          <div>
            <HeadContainer>
              <Header>Create Session</Header>
              <IconButton onClick={() => setOpen(false)}>
                <Close/>
              </IconButton>
            </HeadContainer>

            <Divider/>

            <TField id="outlined-basic" label="Session Name" variant="outlined" size="small" value={seshName} onChange={(e) => setSeshName(e.target.value)}/>

            <Divider/>

            <ButtonContainer>
              <Button onClick={() => setSelAll(!selAll)} color="secondary">
                Select All
              </Button>
              {isDone ? <IconButton color='secondary' onClick={addSession}>
                <Done />
              </IconButton> : null}
            </ButtonContainer>

            <Divider />
            <List subheader={<ListSubheader disableSticky>Opened Tabs</ListSubheader>}>
              {tabs.map((tab) => (
                <ListItem>
                  <FormControlLabel
                    control={<Checkbox color='primary' checked={(selections[tab.url] ? selections[tab.url] : false) || selAll}
                    onChange={handleChange}
                    name={tab.url}/>}
                    label={tab.title.length > 10 ? tab.title.substring(0,10) + '...' : tab.title}
                  />
                </ListItem>
              ))}
            </List>
          </div>
          :
          <h3>No Tabs open. Add more tabs to your window</h3>
        }
      </Drawer>
    </div>
  )
}

export default AddPage;
