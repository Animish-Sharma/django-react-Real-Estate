import React,{useState} from 'react'
import {Link,Redirect} from 'react-router-dom'
import {Helmet} from 'react-helmet';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {login} from '../actions/auth';

const Login = ({login , isAuthenticated}) => {
    const [formData,setFormData] = useState({
        email:'',
        password:'',
    })
    const {email,password} = formData;
    const onChange = e => setFormData({...formData, [e.target.name]:e.target.value})

    const onSubmit=e=>{
        e.preventDefault();
        login(email,password);
        console.log(email,password)
    }
    if(isAuthenticated){
        return (
           <Redirect to='/'></Redirect>
        )
    }
    return(
        <div className="auth">
            <Helmet>
                <title>Real Estate - Log In</title>
                <meta
                name="description"
                content="Login Page"
                />
            </Helmet>
            <h1 className="auth__title">Log In</h1>
            <p className="auth__lead">Log into your account</p>
            <form className="auth__form" onSubmit={e=>onSubmit(e)}>
                <div className="auth__form__group">
                    <input type="email" onChange={e=>onChange(e)} placeholder="Enter Your Email" name="email" value={email} className="auth__form__input"/>
                </div>
                <div className="auth__form__group">
                    <input 
                    type="password" 
                    onChange={e=>onChange(e)} 
                    placeholder="Enter Your Password" 
                    name="password" value={password} 
                    className="auth__form__input"
                    minLength='6'
                    />
                </div>
                <button type="submit" className="auth__form__button">Log In</button>
            </form>
            <p className="auth__authtext">
                Don't Have an Account? No problem <Link className="auth__authtext__link" to="/signup">Sign Up</Link>
            </p>
        </div>
    )
}

Login.propTypes = {
    login: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
}

const mapStateToProps=state=>({
    isAuthenticated:state.auth.isAuthenticated
})

export default connect(mapStateToProps,{login})(Login);