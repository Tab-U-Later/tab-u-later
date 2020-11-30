/* global chrome */

import React, {useState, useEffect, useContext} from 'react'
import styled from 'styled-components'
import {Paper, IconButton, makeStyles, useTheme} from '@material-ui/core'
import {Launch, Delete, Edit} from '@material-ui/icons'
import { useSnackbar } from 'notistack'
import EditCard from './EditCard'
import { Context } from '../../../store'
import { theme } from '../theme'

const Title = styled.p`
  text-align: center;
  font-family: "Open Sans";
  font-size: 1.5em;
  font-weight: bold;
`

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  right: 0;
  left: auto;
  margin-bottom: 5px;
`

const SessionCard = (props) => {

  const [open, setOpen] = useState(false);
  const [urls, setUrls] = useState([]);
  const { state, dispatch } = useContext(Context);
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const currTheme = useTheme(theme)
  const useStyles = makeStyles((theme) => ({
    paper: {
      padding: theme.spacing(),
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      height: '100px',
      width: '150px'
    },
  }));
  const classes = useStyles(currTheme);

  useEffect(()=>{
    let links = [];
    state.sessions[props.name].forEach((tab) => {
      links.push(tab.url);
    })
    setUrls(links);
  }, [])

  const openSession = () => {
    chrome.windows.create({url: [...urls]});
  }

  const removeSession = () => {
    dispatch({type: "REMOVE_SESSION", payload: props.name})
    chrome.storage.sync.remove([props.name], function(){
      enqueueSnackbar('Session Successfully Removed!', {
        variant: 'success'
      })
    });
  }
  return (
    <Paper className={classes.paper} elevation={3}>
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
      <EditCard open={open} name={props.name} toggleDrawer={setOpen}/>
    </Paper>
  )
}

export default SessionCard;
