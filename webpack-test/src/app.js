
import React, { Component } from 'react';
import Header from './components/Header';
import { cube } from './math.js';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header/>
                <div>{cube(5)}</div>
                {console.log('====',process.env.NODE_ENV)}
            </div>
        );
    }
}

export default App;
