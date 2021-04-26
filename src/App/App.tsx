import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { TodoList } from '../TodoList';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={TodoList} />
      </Switch>
    </div>
  );
}

export default App;
