import React, { Component } from 'react';
import logo from './logo.svg';
import {shuffleArray, run_sort, delay} from './utils'
import FlipMove from 'react-flip-move';
import './App.css';

interface IState {
  array: number[]
}

class App extends Component<{},IState> {

  constructor(props: Readonly<{}>){
    super(props)
    this.state = {
      array:Array.from(Array(10).keys())
    };
    (async () => {
      for(const {array} of run_sort(this.state.array,"insertion")){
        this.setState({array})
        await delay(1000);
      }
    })()
   
  }

  render() {
    return (
      <div className="App">
      <FlipMove>
        {this.state.array.map(n => <span key={n}>{n}</span>)}
      </FlipMove>
      </div>
    );
  }
}

export default App;
