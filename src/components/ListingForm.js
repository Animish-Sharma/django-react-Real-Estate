import React,{useState} from 'react';
import axios from 'axios';
import PropTypes from 'prop-types'
import Loader from 'react-loader-spinner';

const ListingForm = (props) => {
    const [formatData,setFormatData]= useState({
        saletype:'For Sale',
        price:'$0+',
        bedroom:'0+',
        home_type:'House',
        bathrooms:'0+',
        sqft:'1000+',
        days_listed:'1 or less',
        has_photos:'1+',
        open_house:'false',
        keywords:'',
    })

    const {saletype,
        price,
        bedroom,
        home_type,
        bathrooms,
        sqft,
        days_listed,
        has_photos,
        open_house,
        keywords} = formatData;

    const [loading,setLoading] = useState(false);
    const onChange = e=> setFormatData({...formatData,[e.target.name]:e.target.value})
    
    const onSubmit = e => {
        e.preventDefault();
        console.log({saletype,
            price,
            bedroom,
            home_type,
            bathrooms,
            sqft,
            days_listed,
            has_photos,
            open_house,
            keywords})
        axios.defaults.headers={
            "Content-Type":"application/json"
        }
        setLoading(true)
        axios.post({% your backend url %},{saletype,price,bedroom,home_type,bathrooms,sqft,days_listed,has_photos,open_house,keywords})
        .then(res=>{
            console.log(res.data)
            setLoading(false);
            props.setListings(res.data);
            window.scroll(0,0)
            
        })
        .catch(err=>{
            setLoading(false);
            window.scroll(0,0);
            console.log(err);
        })
    }

    return (
        <form className="listingform" onSubmit={e=>onSubmit(e)}>
            <div className="row">
                <div className="col-1-of-6">
                    <div className="listingform__section">
                        <label htmlFor="saletype" className="listingform__label">Sale or Rent</label>
                        <select name="saletype" value={saletype} onChange={e=>onChange(e)} className="listingform__select">
                            <option>For Sale</option>
                            <option>For Rent</option>
                        </select>
                    </div>

                    <div className="listingform__section">
                            <label htmlFor="sqft" className="listingform__label">Sqft</label>
                            <select name="sqft" value={sqft} onChange={e=>onChange(e)} className="listingform__select">
                                <option>1000+</option>
                                <option>1200+</option>
                                <option>1500+</option>
                                <option>2000+</option>
                                <option>Any</option>
                            </select>
                    </div>
                {/* Seach Field React Animish Sharma */}
                </div>
                <div className="col-1-of-6">
                    <div className="listingform__section">
                                <label htmlFor="price" className="listingform__label">Min Price</label>
                                <select name="price" value={price} onChange={e=>onChange(e)} className="listingform__select">
                                    <option>$0+</option>
                                    <option>$200,000+</option>
                                    <option>$400,000+</option>
                                    <option>$600,000+</option>
                                    <option>$800,000+</option>
                                    <option>$1,000,000+</option>
                                    <option>$1,200,000+</option>
                                    <option>$1,500,000+</option>
                                    <option>Any</option>
                                </select>
                    </div>

                    <div className="listingform__section">
                                <label htmlFor="days_listed" className="listingform__label">Days Listed</label>
                                <select name="days_listed" value={days_listed} onChange={e=>onChange(e)} className="listingform__select">
                                    <option>1 or less</option>
                                    <option>2 or less </option>
                                    <option>5 or less</option>
                                    <option>10 or less</option>
                                    <option>30 or less</option>
                                    <option>Any</option>
                                </select>
                    </div>
                    
                </div>
                <div className="col-1-of-6">
                    <div className="listingform__section">
                                    <label htmlFor="bedroom" className="listingform__label">Bedrooms</label>
                                    <select name="bedroom" value={bedroom} onChange={e=>onChange(e)} className="listingform__select">
                                        <option>0+</option>
                                        <option>1 </option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </select>
                    </div>

                    <div className="listingform__section">
                                    <label htmlFor="has_photos" className="listingform__label">Has Photos</label>
                                    <select name="has_photos" value={has_photos} onChange={e=>onChange(e)} className="listingform__select">
                                        <option>1+</option>
                                        <option>2+ </option>
                                        <option>3+</option>
                                        <option>5+</option>
                                        <option>10+</option>
                                    </select>
                    </div>

                </div>

                <div className="col-1-of-6">
                    <div className="listingform__section">
                                    <label htmlFor="home_type" className="listingform__label">Home Type</label>
                                    <select name="home_type" value={home_type} onChange={e=>onChange(e)} className="listingform__select">
                                        <option>House</option>
                                        <option>Condo</option>
                                        <option>Appartment</option>
                                    </select>
                    </div>

                    <div className="listingform__section">
                                    <label htmlFor="keywords" className="listingform__label">Keywords</label>
                                    <input type="text" name="keywords" value={keywords} placeholder="keywords" onChange={e=>onChange(e)} className="listingform__input"/>
                    </div>

                </div>

                <div className="col-1-of-6">
                    <div className="listingform__section">
                                    <label htmlFor="bathrooms" className="listingform__label">Bathrooms</label>
                                    <select name="bathrooms" value={bathrooms} onChange={e=>onChange(e)} className="listingform__select">
                                        <option>0+</option>
                                        <option>1+</option>
                                        <option>2+</option>
                                        <option>3+</option>
                                        <option>4+</option>
                                        <option>5+</option>
                                    </select>
                    </div>

                    <div className="listingform__altsection">
                                    <label htmlFor="open_house" className="listingform__label">Open House</label>
                                    <input type="checkbox" name="open_house" value={open_house} placeholder="open_house" className="listingform__checkbox"/>
                    </div>

                </div>
                <div className="col-1-of-6">
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
                            <button className="listingform__button listingform__button--primary">Save</button>
                        )
                    }
                </div>


            </div>
        </form>
    )
}

ListingForm.propTypes={
    setListings: PropTypes.func.isRequired,
};

export default ListingForm
