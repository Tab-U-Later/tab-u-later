import { createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';

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
