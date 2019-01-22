import React, { Component } from 'react';
import './App.css';

//New context
const MyContext = React.createContext();

//Provider Component
class MyProvider extends Component {
    state = {
        person: 'Wesley',
        age: 23
    };

    render(){
        return(
            <MyContext.Provider value={{
                state: this.state,
                growOlder: () => {
                  this.setState({
                      age: this.state.age + 1
                  })
                }
            }}>
                {this.props.children}
            </MyContext.Provider>
        )
    }
}

const Family = (props) => (
    <div className='family'>
        <Person/>
    </div>
);

class Person extends Component{
    render(){
        return(
            <div>
                <MyContext.Consumer>
                    {(context) => (
                        <div>
                            <p>My age is {context.state.age}</p>
                            <p>My name is {context.state.person}</p>
                            <button onClick={context.growOlder}>Click me</button>
                        </div>
                    )}
                </MyContext.Consumer>
            </div>
        )
    }
}

class App extends Component {
    render() {
        return (
            <MyProvider>
                <div>
                    <h1>I am the app</h1>
                    <Family />
                </div>
            </MyProvider>
        );
    }
}

export default App;