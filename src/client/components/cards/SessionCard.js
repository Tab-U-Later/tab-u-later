/* global chrome */

import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import {Paper, IconButton} from '@material-ui/core'
import {Launch, Delete, Edit} from '@material-ui/icons'
import EditCard from './EditCard'

const Container = styled(Paper)`
  height: 100px;
  width: 150px;
  margin: 5px;
`

const Title = styled.p`
  position: relative !important:
  top: 10px !important;
  text-align: center;
  font-family: "Open Sans";
  font-size: 1.5em;
  font-weight: bold;
`

const ButtonContainer = styled.div`
  position: relative !important:
  top: 10px !important;
  display: flex;
  flex-direction: row;
  right: 0;
  left: auto;
  margin-bottom: 5px;
`

const SessionCard = (props) => {

  const [open, setOpen] = useState(false);
  const [urls, setUrls] = useState([]);
  const [titles, setTitles] = useState([]);

  useEffect(()=>{

    let links = [];
    let names = [];
    props.content.forEach((tab) => {
      links.push(tab.url);
      names.push(tab.title);
    })
    setUrls(links);
    setTitles(names);
  }, [])

  const openSession = () => {
    chrome.windows.create({url: [...urls]});
  }

  const removeSession = () => {
    chrome.storage.sync.remove([props.name]);
  }

  return (
    <Container elevation={3}>
        <Title>{props.name}</Title>
        <ButtonContainer>
          <IconButton onClick={() => openSession()}>
            <Launch/>
          </IconButton>
          <IconButton onClick={() => setOpen(true)}>
            <Edit/>
          </IconButton>
          <IconButton onClick={() => removeSession()}>
            <Delete/>
          </IconButton>
        </ButtonContainer>
      <EditCard open={open} content={props.content} name={props.name} toggleDrawer={setOpen}/>
    </Container>
  )
}

export default SessionCard;
