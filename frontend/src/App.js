import './App.css';
import React from "react"
import Button from "./Comp"
import axios from "axios"


function App() {



  return (
    <div className="App">
      <header className="App-header">
        <p>Welcome To Payments App</p>
        <form action='/send' method="POST"
          className="form App">
          <button className='submit' type="submit">Connected?</button>
        </form>
        <Button
          price="100"
        />
      </header>
    </div>
  );
}

export default App;
