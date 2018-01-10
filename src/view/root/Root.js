import React from 'react';
import RootMenu from './RootMenu'
import RootMain from './RootMain'

class Root extends React.Component {
  render() {
    return (
      <div>
        <header>
          <h1>Welcome to React</h1>
        </header>
        <br/>
        <RootMenu />
        <div className="App" >
          <RootMain />
        </div>

      </div>
    );
  }
}

export default Root;
