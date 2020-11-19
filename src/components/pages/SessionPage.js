/* global chrome */

import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import SessionCard from '../cards/SessionCard';
import {AppBar, Grid } from '@material-ui/core'


const SeshContainer = styled(Grid)`
  position: absolute;
  top: 80px;
  left: 20px;
  margin: 10px;
`

const Header = styled.h1`
  text-align: center;
  margin: 15px 0px;
`
const Container= styled.div`
  margin-bottom: 15px;
`

const SessionPage = () => {
  const [sessions, setSessions] = useState({});

  useEffect(async () => {
    await chrome.storage.sync.get(null, function (data) {
      setSessions(data);
    })
  })

  return (
    <Container>
      <AppBar>
        <Header>My Sessions</Header>
      </AppBar>
      <SeshContainer container justify="flex-start" spacing={3}>
        {Object.entries(sessions).map(([key,value]) => (
          <Grid key={key} item>
            <SessionCard name={key} content={value}/>
          </Grid>
        ))}
      </SeshContainer>
      {/* <SeshContainer>
        {Object.entries(sessions).map(([key,value]) => (
          <SessionCard name={key} content={value}/>
        ))}
      </SeshContainer> */}
    </Container>
  )
}
export default SessionPage;
