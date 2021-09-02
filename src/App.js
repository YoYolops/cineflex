import { Switch, Route } from 'react-router';

import './App.css';

import Header from './components/Header';
import Home from './pages/Home'; 
import Movie from './pages/Movie';
import Session from './pages/Session';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route path="/movies/:id" component={ Movie }/>
        <Route path="/session/:id" component={ Session } />
      </Switch>
    </div>
  );
}

export default App;
