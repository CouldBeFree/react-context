import React from 'react';
import '../../App.css';

class Form extends React.Component {
    state = {
        password: '',
        email: '',
        login: '',
        errors: []
    };

    handleChange = (e) => {
        this.setState({ [e.target.name] : e.target.value })
    };

    validateMail = (email) => {
        const check = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        return check.test(email)
    };

    handleSubmit = (e) => {
        e.preventDefault();

        if(this.isFormValid()){
            this.setState({
                errors: []
            })
        } else{
            return false
        }
    };

    isFormValid = () => {
        let errors = [];
        let error;

        this.validateMail(this.state.email);

        if(this.isFormEmpty(this.state)){
            error = { message: 'All fields must be filled' };
            this.setState({
                errors: errors.concat(error)
            });
            return false
        } else {
            return true
        }
    };

    displayErrors = errors => errors.map((err, i) => <p key={i}>{err.message} {err.email} {err.password}</p>);

    isFormEmpty = ({ password, email}) => {
        return !email.length || !password.length
    };

    render(){
        const { errors } = this.state;

        return(
            <div className="main-wrapper form-wrap">
                <div className="form-holder">
                    <form onSubmit={this.handleSubmit} className="form">
                        <input type="text" name="login" placeholder="Login" onChange={this.handleChange}/>
                        <input type="email" name="email" placeholder="Email" onChange={this.handleChange}/>
                        <input type="password" name="password" placeholder="Password" onChange={this.handleChange}/>
                        <input type="submit" value="Submit" className="submit"/>
                    </form>
                    {errors.length > 0 && (
                        <div>
                            <h3>Something wrong</h3>
                            {this.displayErrors(errors)}
                        </div>
                        )}
                </div>
            </div>
        )
    }
}

export default Form;