import React, {Component} from 'react';
import './App.css';
import Party from "./components/Party";
import NavigationBar from "./components/NavigationBar";

export default class App extends Component{

  render() {


      return (
          <div className="App">
              <div className="container">
                  <NavigationBar/>
                  <Party/>

              </div>

          </div>
      );
  }


}


