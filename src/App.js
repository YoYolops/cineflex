import { Switch, Route } from 'react-router';

import './App.css';

import Header from './components/Header';
import Home from './pages/Home'; 
import Session from './pages/Session';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/movies/:id" component={() => <Session />}/>
      </Switch>
    </div>
  );
}

export default App;
