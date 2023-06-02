import React, { Component } from "react";

import Searchbar from "./searchbar/Searchbar";

class App extends Component{

  render() {
    
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101'
        }}
      >
        <Searchbar />        
      </div>
    )
  }
}

export default App;