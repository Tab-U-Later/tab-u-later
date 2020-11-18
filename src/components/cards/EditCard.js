/* global chrome */

import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Divider, Drawer, List, ListItem, ListSubheader, FormControlLabel, Checkbox, IconButton, Button, TextField } from '@material-ui/core';
import { DeleteForever, Remove, Close } from '@material-ui/icons'

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


const EditCard = (props) => {
  const [open, setOpen] = useState(props.open);
  const [newName, updateSeshName] = useState(null)
  const [selAll, setSelAll] = useState(null);
  const [selections, setSelections] = useState({});
  const [tabs, setTabs] = useState(props.content);
  const isDone = true;

  useEffect( () => {
    console.log("Tabs:", tabs)
    tabs.forEach(async (tab) => {
      await setSelections({...selections, [tab.title]: { checked: false, url: tab.url }})
      console.log(selections)
    })
  }, [])

  useEffect(() => {
    setOpen(props.open)
  }, [props])


  const updateSession = async () => {
    let newSesh = [];
    Object.entries(selections).forEach(([key,value]) => {
      if(value.checked === false){
        newSesh.push({url: value.url, title: key})
      }
    })
    console.log(newSesh);
    setTabs(newSesh);
    if (newName === null) {
      await chrome.storage.sync.set({
        [props.name]: newSesh
      })
    }
    if (newName !== null) {
      await chrome.storage.sync.remove([props.name]);
      await chrome.storage.sync.set({
        [newName]: newSesh
      })
    }
  }

  const handleChange = (event, url) => {
    setSelections({...selections, [event.target.name]: { checked: event.target.checked, url: url } })
  }

  return (
    <Drawer anchor="left" open={open}>
      <div>
        <HeadContainer>
          <Header>{`Edit ${props.name}`}</Header>
          <IconButton onClick={() => setOpen(false)}>
            <Close />
          </IconButton>
        </HeadContainer>

        <Divider />

        <TField id="outlined-basic" label="Rename Session" variant="outlined" size="small" value={newName} onChange={(e) => updateSeshName(e.target.value)} />

        <Divider />

        <ButtonContainer>
          <SelAll onClick={() => setSelAll(!selAll)} color="secondary">
            Select All
              </SelAll>
          {isDone ? <DoneButton color='secondary' onClick={updateSession}>
            <Remove />
          </DoneButton> : null}
        </ButtonContainer>

        <Divider />
        <List subheader={<ListSubheader disableSticky>Saved Tabs</ListSubheader>}>
          {tabs.map((tab) => (
            <ListItem>
              <FormControlLabel
                control={<Checkbox color='primary'
                checked={selections[tab.title] ? selections[tab.title]['checked'] : false}
                onChange={(e) => handleChange(e, tab.url)}
                name={tab.title} />}
                label={tab.title.length > 10 ? tab.title.substring(0, 10) + '...' : tab.title}
                checkedIcon={<DeleteForever/>}
              />
            </ListItem>
          ))}
        </List>
      </div>
    </Drawer>
  )

}

export default EditCard;
