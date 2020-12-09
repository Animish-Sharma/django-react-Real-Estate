import React from 'react';
import Card from './Card';

const Listings = ({listings}) => {
    const getListings = () => {
        let listingsOnPage = [];
        let result = [];

        listings.map(listing => {
            return listingsOnPage.push(
                <div>
                    <Card
                    title={listing.title}
                    address={listing.address}
                    city={listing.city}
                    state={listing.state}
                    price={listing.price}
                    saletype={listing.saletype}
                    home_type={listing.home_type}
                    bedrooms={listing.bedrooms}
                    bathrooms={listing.bathrooms}
                    sqft={listing.sqft}
                    photo_main={listing.photo_main}
                    slug={listing.slug}
                />
                </div>
                
            );
        });

        for (let i = 0; i < listings.length; i += 3) {
            result.push(
                <div key={i} className='row'>
                    <div className={listingsOnPage[i+1] && listingsOnPage[i+2] ? "col-1-of-3" : listingsOnPage[i+1] ? "col-2-of-5":"col-5-of-6"}>
                        {listingsOnPage[i]}
                    </div>
                    <div className={listingsOnPage[i+2] ? "col-1-of-3" : "col-2-of-5"}>
                    {listingsOnPage[i+1] ? listingsOnPage[i+1] : null}
                    </div>
                    <div className='col-1-of-3'>
                    {listingsOnPage[i+2] ? listingsOnPage[i+2] : null}
                    </div>
                </div>
            );
        }

        return result;
    };

    return (
        <div>
            {getListings()}
        </div>
    );
}

export default Listings;