/* global chrome */

import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Divider, Drawer, List, ListItem, ListSubheader, FormControlLabel, Checkbox, IconButton, Button, TextField, Modal, Backdrop, Fade, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'
import { DeleteForever, Remove, Close, Done, Check } from '@material-ui/icons'
import { fetchTitle } from '../../../main/src/utils/fetchTitle';
import UrlNotFound from '../utils/UrlNotFound';

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

const EditCard = (props) => {
  const [newName, updateSeshName] = useState(null)
  const [addUrl, updateUrl] = useState(null);
  const [modalOpen, setModal] = useState(false)
  const [tabs, setTabs] = useState(props.content);

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
      [newName]: tabs
    })
    updateSeshName('');
    props.toggleDrawer(false);
  }

  const removeTabs = (title) => {
    let newSesh = [];
    tabs.forEach((tab) => {
      if (tab.title !== title) {
        newSesh.push(tab)
      }
    })
    setTabs(newSesh);

    chrome.storage.sync.set({
      [props.name]: newSesh
    })
  }


  /*TODO: check errors for URL and display proper error warning*/
  const addTab = () => {
    fetchTitle(addUrl, (content) => {
      if (content !== 404) {
        chrome.storage.sync.set({ [props.name]: [...tabs, content] })
        setTabs([...tabs, content])
      }
      else {
        setModal(true)
      }
    })
  }

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
          {tabs.map((tab) => (
            <ListItem>
              <IconButton size='medium' className={classes.errorIcon} onClick={() => removeTabs(tab.title)}>
                <Remove />
              </IconButton>
              <Title>{tab.title.length > 15 ? tab.title.substring(0, 15) + '...' : tab.title}</Title>
            </ListItem>
          ))}
        </List>
      </div>
    </Drawer>
  )

}

export default EditCard;
