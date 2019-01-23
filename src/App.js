import React, { Component } from 'react';
import  Form  from './components/Form/Form'
import './App.css';

class App extends Component {
    render() {
        return (
            <div className='root'>
                <h1>Login</h1>
                <Form/>
            </div>
        );
    }
}

export default App;