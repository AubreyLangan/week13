import React from 'react';
import Login from './components/Login'
import Nav from './components/Nav'

function App() {
  return (
    <div className='container'>
      <h1>My Login App</h1>
      <Nav />
      <Login />
    </div>
  );
}

export default App;
