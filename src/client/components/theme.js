import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#82b1ff',
    },
    secondary: {
      main: '#7c4dff',
    },
  },
  overrides: {
    MuiDrawer: {
      width: '250px'
    }
  }
});
