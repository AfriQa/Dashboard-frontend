import { createMuiTheme, colors } from '@material-ui/core';
import shadows from './shadows';
import typography from './typography';

const theme = createMuiTheme({
  palette: {
    background: {
      dark: '#F4F6F8',
      default: colors.common.white,
      paper: colors.common.white
    },
    primary: {
      main: '#77E393'
      
      
    },
    secondary: {
      main: '#77E393'
    },
    text: {
      primary: '#222222',
      secondary: colors.blueGrey[600]
    }
  },
  shadows,
  typography
});

export default theme;
