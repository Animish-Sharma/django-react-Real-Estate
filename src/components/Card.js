import React from 'react'
import {Link} from 'react-router-dom';
import Proptypes from 'prop-types'

const Card = (props) => {
    const numWithCommas=(x)=>{
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }
    return (
        <div className="card">
            <h1 className="card__title">
                {props.title}
            </h1>
            <div className="card__header">
                <img src={props.photo_main} alt="House" className="card__header__photo"/>
            </div>
                <p className="card__location">{props.address},{props.city},{props.state}</p>
            <div className="row">
                <div className="col-2-of-3">
                    <p className="card__info">Price: ${numWithCommas(props.price)} </p>
                    <p className="card__info">Bedrooms: {props.bedrooms} </p>
                    <p className="card__info">Bathrooms: {props.bathrooms}</p>
                </div>
                <div className="col-2-of-3">
                    <p className="card__saletype">Sale Type: {props.saletype}</p>
                    <p className="card__hometype">House Type: {props.home_type}</p>
                    <p className="card__sqft">Square Feet: {props.sqft}</p>
                </div>
            </div>
            <Link className="card__link" to={`/listings/${props.slug}`} >View Details</Link>
        </div>
    )
}
Card.prototype={
    title:Proptypes.string.isRequired,
    photo_main:Proptypes.string.isRequired,
    address:Proptypes.string.isRequired,
    city:Proptypes.string.isRequired,
    state:Proptypes.string.isRequired,
    price:Proptypes.number.isRequired,
    bedrooms:Proptypes.number.isRequired,
    bathrooms:Proptypes.string.isRequired,
    sqft:Proptypes.number.isRequired,
    saletype:Proptypes.string.isRequired,
    house_type:Proptypes.string.isRequired,
    slug:Proptypes.string.isRequired,
  }
export default Card
