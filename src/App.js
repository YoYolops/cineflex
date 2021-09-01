import { Switch, Route } from 'react-router';

import './App.css';

import Header from './components/Header';
import Home from './pages/Home'; 

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/movies/:id" component={() => <p>oi</p>}/>
      </Switch>
    </div>
  );
}

export default App;
