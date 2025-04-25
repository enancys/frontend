import React, { useState, useEffect, useCallback } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const RestaurantsUpdate = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    console.log('Restaurant ID:', id);
    const [restaurantsData, setRestaurantsData] = useState({
        name: "",
        location: "",
        rating: "",
        website_url: "",
        opening_hours: "",
        cuisine_id: "",
        ratign: "",
        image_url: "",
    });

    const getRestaurants = useCallback(() => {
        axios.get(`http://127.0.0.1:8000/api/restaurants/${id}`)
        .then(Response => {
            const { name, location, rating, website_url, opening_hours, cuisine_id, ratign, image_url } = Response.data;
            setRestaurantsData({ name, location, rating, website_url, opening_hours, cuisine_id, ratign, image_url });
        })
        .catch(Error => {
            alert('Error fetching restaurants details: ', Error);
        });
    }, [id]);

    useEffect(() => {
        getRestaurants();
    }, [getRestaurants]);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setRestaurantsData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.put(`http://127.0.0.1:8000/api/restaurants/${id}`, restaurantsData)
        .then(Response => {
            alert('restaurants updated successfully: ', Response.data);
            navigate('/admin/restaurants');
        })
        .catch(Error => {
            console.error('Error updating restaurants: ', Error);
        });
    }

    return (
        <div className="container-fluid">
            <h1 className="h3 text-gray-800 mb-2">Edit Book</h1>
            <div className="card shadow mb-4">
                <div className="card-body">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label>Name:</label>
                            <input type="text"
                                name="name"
                                value={restaurantsData.name}
                                onChange={handleInputChange}
                                className="form-control"
                                required/>
                        </div>
                        <div className="form-group">
                            <label>Location:</label>
                            <input type="text"
                                name="location"
                                value={restaurantsData.location}
                                onChange={handleInputChange}
                                className="form-control"
                                required/>
                        </div>
                        <div className="form-group">
                            <label>rating:</label>
                            <input type="text"
                                name="rating"
                                value={restaurantsData.rating}
                                onChange={handleInputChange}
                                className="form-control"
                                required/>
                        </div>
                        <div className="form-group">
                            <label>Website_url:</label>
                            <input type="text"
                                name="website_url"
                                value={restaurantsData.website_url}
                                onChange={handleInputChange}
                                className="form-control"
                                required/>
                        </div>
                        <div className="form-group">
                            <label>Opening_hours:</label>
                            <input type="text"
                                name="opening_hours"
                                value={restaurantsData.opening_hours}
                                onChange={handleInputChange}
                                className="form-control"
                                required/>
                        </div>
                        <div className="form-group">
                            <label>Cuisine_id :</label>
                            <input type="text"
                                name="cuisine_id "
                                value={restaurantsData.cuisine_id}
                                onChange={handleInputChange}
                                className="form-control"
                                required/>
                        </div>
                        <div className="form-group">
                            <label>Rating:</label>
                            <input type="text"
                                name="rating"
                                value={restaurantsData.rating}
                                onChange={handleInputChange}
                                className="form-control"
                                required/>
                        </div>
                        <div className="form-group">
                            <label>image_url:</label>
                            <input type="text"
                                name="Image_url"
                                value={restaurantsData.image_url}
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

export default RestaurantsUpdate;