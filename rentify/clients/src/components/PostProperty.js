// client/src/components/PostProperty.js
import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const PostProperty = () => {
    const [place, setPlace] = useState('');
    const [area, setArea] = useState('');
    const [bedrooms, setBedrooms] = useState('');
    const [bathrooms, setBathrooms] = useState('');
    const [hospitalsNearby, setHospitalsNearby] = useState('');
    const [collegesNearby, setCollegesNearby] = useState('');
    const history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/api/properties', {
                place,
                area,
                bedrooms,
                bathrooms,
                hospitalsNearby,
                collegesNearby
            }, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            });
            history.push('/properties');
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <h2>Post Property</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Place"
                    value={place}
                    onChange={(e) => setPlace(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Area"
                    value={area}
                    onChange={(e) => setArea(e.target.value)}
                />
                <input
                    type="number"
                    placeholder="Bedrooms"
                    value={bedrooms}
                    onChange={(e) => setBedrooms(e.target.value)}
                />
                <input
                    type="number"
                    placeholder="Bathrooms"
                    value={bathrooms}
                    onChange={(e) => setBathrooms(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Hospitals Nearby"
                    value={hospitalsNearby}
                    onChange={(e) => setHospitalsNearby(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Colleges Nearby"
                    value={collegesNearby}
                    onChange={(e) => setCollegesNearby(e.target.value)}
                />
                <button type="submit">Post Property</button>
            </form>
        </div>
    );
};

export default PostProperty;
