import React, { useState,useEffect } from 'react'
import {Helmet} from 'react-helmet';
import axios from 'axios';
import {setAlert} from '../actions/alert'
import {connect } from 'react-redux';
import Loader from 'react-loader-spinner';
import PropTypes from 'prop-types';

const Contact = ({setAlert}) => {
    useEffect(() => {
        window.scrollTo(0,0);

    }, [])

    const [formatData,setFormatData]= useState({
        name:'',
        email:'',
        subject:'',
        message:''
    })

    const {name,
        email,
        subject,
        message} = formatData;

    const [loading,setLoading] = useState(false);
    const onChange = e=> setFormatData({...formatData,[e.target.name]:e.target.value})
    
    const onSubmit = e => {
        e.preventDefault();
        axios.defaults.headers={
            "Content-Type":"application/json"
        }
        setLoading(true)
        axios.post({% your backend url %},{name,email,subject,message})
        .then(res=>{
            console.log(res.data)
            setAlert("Message Sent Successfully",'success')
            setLoading(false);
            window.scroll(0,0)
            
        })
        .catch(err=>{
            setAlert("Error in Sending Message",'error')
            setLoading(false);
            console.log(err);
        })
    }
    return (
        <div className="contact">
            <Helmet>
                <title>RealEstate || About</title>
                <meta
                name="description"
                content="Contact US"
                />
            </Helmet>
            <form onSubmit={e=>onSubmit(e)} className="contact__form">
                <label htmlFor="name" className="contact__form__label">Name: </label>
                <input placeholder="Full Name" onChange={e=>onChange(e)} type="text" name="name" value={name} required className="contact__form__input"/>
                
                <label htmlFor="email" className="contact__form__label">Email: </label>
                <input placeholder="xyz@yourmail.com" onChange={e=>onChange(e)} type="email" name="email" value={email} required className="contact__form__input"/>
                
                <label htmlFor="subject" className="contact__form__label">Subject: </label>
                <input placeholder="Buying home etc." onChange={e=>onChange(e)} type="text" name="subject" value={subject} required className="contact__form__input"/>
            
                <label htmlFor="message" className="contact__form__label">Message: </label>
                <textarea
                 name="message" 
                 value={message} 
                 cols="30"
                 placeholder="We Want To Buy A Home" 
                 rows="10"
                 onChange={e=>onChange(e)}
                 className="contact__form__textarea"
                 ></textarea>

                    {
                        loading ? (
                            <div className="listingform__loader">
                                <Loader
                                type="Oval"
                                color = "#424242"
                                height={50}
                                width={50}
                            />
                            </div>
                        ):(
                            <button type="submit" className="contact__form__button">Send</button>
                        )
}

            </form>
        </div>
    )
}

Contact.propTypes={
    setAlert: PropTypes.func.isRequired
}

export default connect(null,{setAlert})(Contact);
