import { useTheme } from "styled-components"

import { Modal, Backdrop, Fade, Paper, makeStyles } from "@material-ui/core"

import {theme} from '../theme'

const UrlNotFound = ({open, toggleModal, message}) => {
  const currTheme = useTheme(theme)
  const useStyles = makeStyles((theme) => ({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));

  const classes = useStyles(currTheme);



  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className={classes.modal}
      open={open}
      onClose={() => toggleModal(false)}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <Paper className={classes.paper}>
          <h2>Error</h2>
          <p id="transition-modal-description">{message}</p>
        </Paper>
      </Fade>
    </Modal>
  )
}

export default UrlNotFound
