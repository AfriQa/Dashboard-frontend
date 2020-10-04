import React from "react";
import { useRoutes } from "react-router-dom/Route";
import "react-perfect-scrollbar/dist/css/styles.css";
import { ThemeProvider } from "@material-ui/core";
import GlobalStyles from "./Components/GlobalStyles/GlobalStyles";

import "./Mixins/Charts"
import theme from "./theme";
import routes from "./routes";

import "./default.scss";

const App = () => {
  const routing = useRoutes(routes);
  return (
    <ThemeProvider theme={theme}>
      {routing}
      <GlobalStyles/>
    </ThemeProvider>
  );
};

export default App;
