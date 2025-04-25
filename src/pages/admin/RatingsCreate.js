import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';

const RatingsCreate = () => {
    const navigate = useNavigate();
    const [ratingsData, setRatingsData] = useState({
        user_id: "",
        food_id: "",
        restaurant_id: "",
        rating: "",
        review: "",
    });
    const [error, setError] = useState(null);
    const [successMessage, setSuccessMessage] = useState(null);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setRatingsData({...ratingsData, [name]: value});
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setError(null); // Reset error saat submit
        setSuccessMessage(null); // Reset success message

        axios.post('http://127.0.0.1:8000/api/ratings', ratingsData)
        .then(Response => {
            setSuccessMessage('ratings added successfully!');
            setTimeout(() => {
                navigate('/admin/ratings');
            }, 1500); 
        })
        .catch(Error => {
            console.error('Error adding ratings:', error.response || error.message);
            setError('Failed to add ratings. Please check the form data and try again.');
        });
    };

    return (
        <div className="container-fluid">
            <h1 className="h3 text-gray-800 mb-2">Add New ratings</h1>
            <Link to="/admin/ratings" className="btn btn-secondary mb-2">Back</Link>
            <div className="card shadow mb-4">
                <div className="card-body">
                    {error && <div className="alert alert-danger">{error}</div>}
                    {successMessage && <div className="alert alert-success">{successMessage}</div>}
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label>User ID:</label>
                            <input type="text"
                                name="user_id"
                                value={ratingsData.user_id}
                                onChange={handleInputChange}
                                className="form-control"
                                required />
                        </div>
                        <div className="form-group">
                            <label>Food ID:</label>
                            <input type="text"
                                name="food_id"
                                value={ratingsData.food_id}
                                onChange={handleInputChange}
                                className="form-control"
                                required />
                        </div>
                        <div className="form-group">
                            <label>Restaurant ID:</label>
                            <input type="text"
                                name="restaurant_id"
                                value={ratingsData.restaurant_id}
                                onChange={handleInputChange}
                                className="form-control"
                                required />
                        </div>
                        <div className="form-group">
                            <label>Rating:</label>
                            <input type="number"
                                name="rating"
                                value={ratingsData.rating}
                                onChange={handleInputChange}
                                className="form-control"
                                required 
                                step="0.1"/>
                        </div>
                        <div className="form-group">
                            <label>Review:</label>
                            <input type="text"
                                name="review"
                                value={ratingsData.review}
                                onChange={handleInputChange}
                                className="form-control"
                                required />
                        </div>
                        <button type="submit" className="btn btn-success">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default RatingsCreate;