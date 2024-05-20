// client/src/components/PropertyDetail.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const PropertyDetail = () => {
    const { id } = useParams();
    const [property, setProperty] = useState(null);

    useEffect(() => {
        const fetchProperty = async () => {
            const res = await axios.get(`/api/properties/${id}`);
            setProperty(res.data);
        };
        fetchProperty();
    }, [id]);

    const handleInterest = async () => {
        try {
            await axios.post(`/api/properties/${id}/interested`, {}, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            });
            alert('Interest expressed successfully!');
        } catch (error) {
            console.error(error);
        }
    };

    if (!property) return <div>Loading...</div>;

    return (
        <div>
            <h2>{property.place}</h2>
            <p>Area: {property.area} sqft</p>
            <p>Bedrooms: {property.bedrooms}</p>
            <p>Bathrooms: {property.bathrooms}</p>
            <p>Hospitals Nearby: {property.hospitalsNearby}</p>
            <p>Colleges Nearby: {property.collegesNearby}</p>
            <button onClick={handleInterest}>I'm Interested</button>
        </div>
    );
};

export default PropertyDetail;
