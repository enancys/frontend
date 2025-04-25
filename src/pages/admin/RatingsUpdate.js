import React, { useState, useEffect, useCallback } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const RatingsUpdate = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    console.log('Ratings ID:', id);
    const [ratingsData, setRatingsData] = useState({
        user_id: "",
        food_id: "",
        restaurant_id: "",
        rating: "",
        review: "",
    });

    const getRatings = useCallback(() => {
        axios.get(`http://127.0.0.1:8000/api/ratings/${id}`)
        .then(Response => {
            const { user_id, food_id, restaurant_id, rating, review } = Response.data;
            setRatingsData({ user_id, food_id, restaurant_id, rating, review });
        })
        .catch(Error => {
            alert('Error fetching ratings details: ', Error);
        });
    }, [id]);

    useEffect(() => {
        getRatings();
    }, [getRatings]);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setRatingsData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.put(`http://127.0.0.1:8000/api/ratings/${id}`, ratingsData)
        .then(Response => {
            alert('ratings updated successfully: ', Response.data);
            navigate('/admin/ratings');
        })
        .catch(Error => {
            console.error('Error updating ratings: ', Error);
        });
    }

    return (
        <div className="container-fluid">
            <h1 className="h3 text-gray-800 mb-2">Edit Book</h1>
            <div className="card shadow mb-4">
                <div className="card-body">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label>User_id:</label>
                            <input type="text"
                                name="user_id"
                                value={ratingsData.user_id}
                                onChange={handleInputChange}
                                className="form-control"
                                required/>
                        </div>
                        <div className="form-group">
                            <label>Food_id:</label>
                            <input type="text"
                                name="food_id"
                                value={ratingsData.food_id}
                                onChange={handleInputChange}
                                className="form-control"
                                required/>
                        </div>
                        <div className="form-group">
                            <label>Restaurant ID:</label>
                            <input type="text"
                                name="restaurant_id"
                                value={ratingsData.restaurant_id}
                                onChange={handleInputChange}
                                className="form-control"
                                required/>
                        </div>
                        <div className="form-group">
                            <label>rating:</label>
                            <input type="text"
                                name="rating"
                                value={ratingsData.rating}
                                onChange={handleInputChange}
                                className="form-control"
                                required/>
                        </div>
                        <div className="form-group">
                            <label>review:</label>
                            <input type="text"
                                name="review"
                                value={ratingsData.review}
                                onChange={handleInputChange}
                                className="form-control"
                                required/>
                        </div>
                        <button type="submit"
                            className="btn btn-primary">Update
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default RatingsUpdate;