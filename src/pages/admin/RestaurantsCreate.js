import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';

const RestaurantsCreate = () => {
    const navigate = useNavigate();
    const [restaurantsData, setRestaurantsData] = useState({
        name: "",
        location: "",
        rating: "",
        cuisine_id : "",
        description: "",

    });
    const [error, setError] = useState(null);
    const [successMessage, setSuccessMessage] = useState(null);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setRestaurantsData({...restaurantsData, [name]: value});
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setError(null); // Reset error saat submit
        setSuccessMessage(null); // Reset success message

        axios.post('http://127.0.0.1:8000/api/restaurants', restaurantsData)
        .then(Response => {
            setSuccessMessage('restaurants added successfully!');
            setTimeout(() => {
                navigate('/admin/restaurants');
            }, 1500); // Redirect setelah 1.5 detik
        })
        .catch(Error => {
            console.error('Error adding restaurants:', Error);
            setError('Failed to add restaurants. Please check the form data and try again.');
        });
    };

    return (
        <div className="container-fluid">
            <h1 className="h3 text-gray-800 mb-2">Add New restaurants</h1>
            <Link to="/admin/restaurants" className="btn btn-secondary mb-2">Back</Link>
            <div className="card shadow mb-4">
                <div className="card-body">
                    {error && <div className="alert alert-danger">{error}</div>}
                    {successMessage && <div className="alert alert-success">{successMessage}</div>}
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label>Name:</label>
                            <input type="text"
                                name="name"
                                value={restaurantsData.name}
                                onChange={handleInputChange}
                                className="form-control"
                                required />
                        </div>
                        <div className="form-group">
                            <label>Location:</label>
                            <input type="text"
                                name="location"
                                value={restaurantsData.location}
                                onChange={handleInputChange}
                                className="form-control"
                                required />
                        </div>
                        <div className="form-group">
                            <label>Rating:</label>
                            <input type="number" step="0.01"
                                name="rating"
                                value={restaurantsData.rating}
                                onChange={handleInputChange}
                                className="form-control"
                                required />
                        </div>
                        <div className="form-group">
                            <label>Cuisines_ID:</label>
                            <input type="text"
                                name="cuisine_id"
                                value={restaurantsData.cuisine_id}
                                onChange={handleInputChange}
                                className="form-control"
                                required/>
                        </div>
                        <div className="form-group">
                            <label>description:</label>
                            <input type="text"
                                name="description"
                                value={restaurantsData.description}
                                onChange={handleInputChange}
                                className="form-control"
                                required/>
                        </div>
                        <button type="submit" className="btn btn-success">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default RestaurantsCreate;