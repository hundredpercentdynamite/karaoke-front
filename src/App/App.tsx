import React from 'react';
import { Switch, Route } from 'react-router-dom';
import SongList from '../components/SongList';
import './App.scss';
import SongPage from '../components/SongPage';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/song/:songId" component={SongPage} />
        <Route path="/" exact component={SongList} />
      </Switch>
    </div>
  );
}

export default App;
