/* global chrome */

import React, { useEffect, useState, useContext } from 'react'
import styled from 'styled-components'
import SessionCard from '../cards/SessionCard';
import { AppBar, Grid } from '@material-ui/core'
import { Context } from '../../../store';

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
const Container = styled.div`
  margin-bottom: 15px;
`

const SessionPage = () => {
  const { state, dispatch } = useContext(Context);

  useEffect(() => {
    chrome.storage.sync.get(null, function (data) {
      dispatch({ type: "SET_SESSIONS", payload: data })
    })
  }, [])

  return (
    <Container>
      <AppBar>
        <Header>My Sessions</Header>
      </AppBar>
      <SeshContainer container justify="flex-start" spacing={3}>
        {Object.keys(state.sessions).length >= 1 ?
          Object.entries(state.sessions).map(([key, value]) => (
            <Grid key={key} item>
              <SessionCard name={key} />
            </Grid>
          ))
          :
          <div>hi</div>}

      </SeshContainer>
    </Container>
  )
}
export default SessionPage;
