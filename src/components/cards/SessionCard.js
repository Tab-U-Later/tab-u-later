/* global chrome */

import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import {Paper, IconButton} from '@material-ui/core'
import {Launch, Delete, Edit} from '@material-ui/icons'


const Container = styled(Paper)`
  height: 100px;
  width: 150px;
  margin: 5px;
`

const Title = styled.h2`
  text-align: center;
  font-family: "Open Sans";
`

const OpenBut = styled(IconButton)`
`

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  right: 0;
  left: auto;
`

const SessionCard = (props) => {

  const openSession = () => {
    chrome.windows.create({url: props.content});
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
        <IconButton>
          <Edit/>
        </IconButton>
        <IconButton onClick={() => removeSession()}>
          <Delete/>
        </IconButton>
      </ButtonContainer>
    </Container>
  )
}

export default SessionCard;
