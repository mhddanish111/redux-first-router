import React from 'react';
import {connect} from 'react-redux';
import './App.css';
import MenuBar from './components/common/menuBar';
import components from './components';

function App(props) {
  console.log(props);
  const page =  props.pages || 'Home';
  const Component = components[page];
  return (
    <div className="App">
      <header className="App-header">
        <MenuBar />
        <Component />
      </header>
    </div>
  );
}

const mapStateToProps = (state) => {
   return state;
}

const mapDispatchToProps = (dispatch) => {

}

export default connect(mapStateToProps,mapDispatchToProps)(App);
