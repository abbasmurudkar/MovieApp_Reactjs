import './App.css';
import { Switch, Route } from 'react-router-dom'
import Home from './pages/Home';
import Starred from './pages/Starred';
import Showsid from './components/shows/Showsid';
function App() {
  return (
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
  );
}

export default App;
