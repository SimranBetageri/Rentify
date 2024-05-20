// client/src/components/PropertyList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PropertyList = () => {
    const [properties, setProperties] = useState([]);

    useEffect(() => {
        const fetchProperties = async () => {
            const res = await axios.get('/api/properties');
            setProperties(res.data);
        };
        fetchProperties();
    }, []);

    return (
        <div>
            <h2>Properties</h2>
            <ul>
                {properties.map(property => (
                    <li key={property._id}>
                        {property.place} - {property.area} sqft - {property.bedrooms} BR - {property.bathrooms} Bath
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PropertyList;
