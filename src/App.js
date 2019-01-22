import React, { Component } from 'react';
import './App.css';

//New context
const MyContext = React.createContext();

//Provider Component
class MyProvider extends Component {
    state = {
        error: {
            empty: 'This field must be filled',
            email: 'Email incorrect',
            count: 'Must be at least 4 characters'
        }
    };

    render(){
        return(
            <MyContext.Provider value={{
                state: this.state
            }}>
                {this.props.children}
            </MyContext.Provider>
        )
    }
}


class Form extends Component{
    state = {
        password: '',
        email: '',
        text: ''
    };

    handleSubmit = (e) => {
        e.preventDefault();
        console.log('True');
    };

    handleChange = (e) => {
        this.setState({ [e.target.name] : e.target.value })
    };

    render(){
        return(
            <div>
                <MyContext.Consumer>
                    {(context) => (
                        <div>
                            <form onSubmit={this.handleSubmit} className="form">
                                <input type="text" name="text" placeholder="Login" onChange={this.handleChange}/>
                                <input type="email" name="email" placeholder="Email" onChange={this.handleChange}/>
                                <input type="password" name="password" placeholder="Password" onChange={this.handleChange}/>
                                <input type="submit" value="Submit" className="submit"/>
                            </form>
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
                <div className='root'>
                    <h1>I am the form</h1>
                    <Form/>
                </div>
            </MyProvider>
        );
    }
}

export default App;