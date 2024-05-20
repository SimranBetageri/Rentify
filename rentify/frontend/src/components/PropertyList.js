// src/components/PropertyList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PropertyItem from './PropertyItem';

const PropertyList = () => {
    const [properties, setProperties] = useState([]);

    useEffect(() => {
        const fetchProperties = async () => {
            try {
                const res = await axios.get('http://localhost:5000/api/properties');
                setProperties(res.data);
            } catch (error) {
                console.error(error.message);
            }
        };
        fetchProperties();
    }, []);

    return (
        <div>
            {properties.map((property) => (
                <PropertyItem key={property._id} property={property} />
            ))}
        </div>
    );
};

export default PropertyList;
