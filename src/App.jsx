
import "react-perfect-scrollbar/dist/css/styles.css";
import React from "react";
import  {useRoutes} from "react-router-dom/index";
import { ThemeProvider } from "@material-ui/core";
import GlobalStyles from "./Components/GlobalStyles/GlobalStyles";

import "./Mixins/Charts";
import theme from "./Theme";
import routes from "./routes";


const App = () => {
  const routing = useRoutes(routes);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {routing}
    </ThemeProvider>
  );
};

export default App;
