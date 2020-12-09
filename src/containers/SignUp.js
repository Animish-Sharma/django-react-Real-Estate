import React, { useState } from 'react'
import {connect} from 'react-redux';
import {Link,Redirect} from 'react-router-dom';
import {Helmet} from 'react-helmet';
import {setAlert} from '../actions/alert';
import {signup} from '../actions/auth';
import PropTypes from 'prop-types';

const Signup = ({setAlert,signup,isAuthenticated}) => {
    const [formData,setFormData] = useState({
        name:'',
        email:'',
        password:'',
        password2:''
    })
    const {name,email,password,password2} = formData

    const onChange=e=>setFormData({...formData,[e.target.name]:e.target.value})

    const onSubmit=e=>{
        e.preventDefault();
        if(password !== password2){
            setAlert("Password Dont't Match","error")
        }
        else{
            signup(name,email,password,password2)
        }
        console.log(e)
    }

    if(isAuthenticated){
        return <Redirect to="/"></Redirect>
    }
    return(
        <div className="auth">
            <Helmet>
                <title>Real Estate - SignUp</title>
                <meta
                name="description"
                content="SignUp Page"
                />
            </Helmet>
            <h1 className="auth__title">SignUp</h1>
            <p className="auth__lead">Create A New Account</p>
            <form className="auth__form" onSubmit={e=>onSubmit(e)}>
                    <div className="auth__form__group">
                        <input type="text" onChange={e=>onChange(e)}  name='name' value={name} placeholder="Enter A Name" className="auth__form__input"/>
                    </div>
                    
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
                <div className="auth__form__group">
                        <input type="password" onChange={e=>onChange(e)}  placeholder="Re Enter Your Password" name="password2" value={password2} className="auth__form__input"/>
                    </div>
                
                <button type="submit" className="auth__form__button">Log In</button>
            </form>
            <p className="auth__authtext">
                Already Have An Account. <Link className="auth__authtext__link" to="/login">Log In</Link>
            </p>
        </div>
    )
}

Signup.propTypes = {
    setAlert:PropTypes.func.isRequired,
    signup: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
}

const mapStateToProps=state=>({
    isAuthenticated:state.auth.isAuthenticated
})
export default connect(mapStateToProps,{setAlert,signup})(Signup)