import React from 'react';
import './App.css';
import Nav from './components/Nav';
import Tweets from './components/Tweets';

function App() {
  const name ='Abu';
  const age = '29';
  return (
    <div className="App">
    <h1>Hello</h1>
    <div className = 'home'>
      <Nav/>
    <Tweets name= {name} age = {age}/>
    </div>
    
   <Nav/>
   <Tweets/>
    </div>
  );
}

export default App;
