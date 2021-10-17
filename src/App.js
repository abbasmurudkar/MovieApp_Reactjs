import './App.css';
import { Switch, Route } from 'react-router-dom'
import Home from './pages/Home';
import Starred from './pages/Starred';
import Showsid from './pages/Showsid';
import { ThemeProvider } from 'styled-components';
const theme = {
  mainColors: {
    blue: '#2400ff',
    gray: '#c6c6c6',
    dark: '#353535',
  },
};
function App() {
  return (
    <ThemeProvider theme={theme}>   {/* it is an theme provider for styled component so that we can use all this theme inside the theme object in our whole app*/}
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/starred">
          <Starred />
        </Route>
        <Route exact path="/show/:id" >
          <Showsid/>
        </Route>
        <Route >
          ERROR FOR 404
        </Route>
      </Switch>
      </ThemeProvider>
  );
}

export default App;
