// src/components/PropertyForm.js
import React, { useState, useContext } from 'react';
import axios from 'axios';
import AuthContext from '../context/AuthContext';

const PropertyForm = ({ property, onSubmit }) => {
    const { authState } = useContext(AuthContext);
    const [formData, setFormData] = useState(
        property || {
            place: '',
            area: '',
            bedrooms: '',
            bathrooms: '',
            nearbyHospitals: '',
            nearbyColleges: '',
        }
    );

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (property) {
                await axios.put(`http://localhost:5000/api/properties/${property._id}`, formData, {
                    headers: { 'x-auth-token': authState.token },
                });
            } else {
                await axios.post('http://localhost:5000/api/properties', formData, {
                    headers: { 'x-auth-token': authState.token },
                });
            }
            onSubmit();
        } catch (error) {
            console.error(error.response.data.message);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="place" placeholder="Place" value={formData.place} onChange={handleChange} required />
            <input type="number" name="area" placeholder="Area" value={formData.area} onChange={handleChange} required />
            <input type="number" name="bedrooms" placeholder="Bedrooms" value={formData.bedrooms} onChange={handleChange} required />
            <input type="number" name="bathrooms" placeholder="Bathrooms" value={formData.bathrooms} onChange={handleChange} required />
            <input type="text" name="nearbyHospitals" placeholder="Nearby Hospitals" value={formData.nearbyHospitals} onChange={handleChange} />
            <input type="text" name="nearbyColleges" placeholder="Nearby Colleges" value={formData.nearbyColleges} onChange={handleChange} />
            <button type="submit">Submit</button>
        </form>
    );
};

export default PropertyForm;
