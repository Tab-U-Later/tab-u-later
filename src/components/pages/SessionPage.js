/* global chrome */

import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import SessionCard from '../cards/SessionCard';


const SeshContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  flex-direction: row;
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
      <Header>My Sessions</Header>
      <SeshContainer>
        {Object.entries(sessions).map(([key,value]) => (
          <SessionCard name={key} content={value}/>
        ))}
      </SeshContainer>
    </Container>
  )
}
export default SessionPage;
