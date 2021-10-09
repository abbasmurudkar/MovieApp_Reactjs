import './App.css';
import { Switch, Route } from 'react-router-dom'
import Home from './pages/Home';
import Starred from './pages/Starred';
function App() {
  return (
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/starred">
          <Starred />
        </Route>
        <Route >
          ERROR FOR 404
        </Route>
      </Switch>
  );
}

export default App;
