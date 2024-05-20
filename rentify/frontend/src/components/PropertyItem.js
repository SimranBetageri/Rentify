// src/components/PropertyItem.js
import React, { useContext } from 'react';
import AuthContext from '../context/AuthContext';

const PropertyItem = ({ property }) => {
    const { authState } = useContext(AuthContext);

    const handleInterested = async () => {
        try {
            const res = await axios.get(`http://localhost:5000/api/properties/${property._id}/interested`, {
                headers: { 'x-auth-token': authState.token },
            });
            console.log(res.data);
        } catch (error) {
            console.error(error.response.data.message);
        }
    };

    return (
        <div>
            <h3>{property.place}</h3>
            <p>Area: {property.area} sq. ft.</p>
            <p>Bedrooms: {property.bedrooms}</p>
            <p>Bathrooms: {property.bathrooms}</p>
            <p>Nearby Hospitals: {property.nearbyHospitals}</p>
            <p>Nearby Colleges: {property.nearbyColleges}</p>
            <button onClick={handleInterested}>I'm Interested</button>
        </div>
    );
};

export default PropertyItem;
