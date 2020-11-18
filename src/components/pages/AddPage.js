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
`

const HeadContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  margin: 3px 5px;
`

const SelAll = styled(Button)`
  margin-left: 10px !important;
`

const DoneButton = styled(IconButton)`
  margin-right: 5px !important;
`

const AddPage = () => {
  const [open, setOpen] = useState(false);
  const [tabs, setTabs] = useState(null);
  const [selections, setSelections] = useState({});
  const [isDone, setDone] = useState(false);
  const [selAll, setSelAll] = useState(null);
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

  const handleChange = (event, url) => {
    setSelections({...selections, [event.target.name]: {checked: event.target.checked, url: url}})
  }

  const addSession = async () => {
    setOpen(false);
    let session = [];
    for(const key in selections){
      if(selections[key]['checked'] === true || selAll === true){
        session.push({title: key, url: selections[key]['url']});
      }
    }

    await chrome.storage.sync.set({[seshName]: session});
  }

  useEffect(() => {
    getTabs();
    let anyChecked = selAll;
    for(const key in selections){
      if(selections[key]['checked'] === true){
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
              <SelAll onClick={() => setSelAll(!selAll)} color="secondary">
                Select All
              </SelAll>
              {isDone ? <DoneButton color='secondary' onClick={addSession}>
                <Done />
              </DoneButton> : null}
            </ButtonContainer>

            <Divider />
            <List subheader={<ListSubheader disableSticky>Opened Tabs</ListSubheader>}>
              {tabs.map((tab) => (
                <ListItem>
                  <FormControlLabel
                    control={<Checkbox color='primary' checked={(selAll === true ? true : (selections[tab.title] ? selections[tab.title]['checked'] : false))}
                    onChange={(e) => handleChange(e, tab.url)}
                    name={tab.title}/>}
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
