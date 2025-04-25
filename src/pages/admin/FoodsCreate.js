import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';

const FoodsCreate = () => {
    const navigate = useNavigate();
    const [foodsData, setFoodsData] = useState({
        name: "",
        description: "",
        price: "",
        image_url    : "",
        restaurant_id: "",
        cuisine_id : ""
    });

    const [error, setError] = useState(null);
    const [successMessage, setSuccessMessage] = useState(null);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFoodsData({...foodsData, [name]: value});
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setError(null); // Reset error saat submit
        setSuccessMessage(null); // Reset success message

        axios.post('http://127.0.0.1:8000/api/foods', foodsData)
        .then(Response => {
            setSuccessMessage('foods added successfully!');
            setTimeout(() => {
                navigate('/admin/foods');
            }, 1500); // Redirect setelah 1.5 detik
        })
        .catch(Error => {
            console.error('Error adding foods:', Error);
            setError('Failed to add foods. Please check the form data and try again.');
        });
    };

    return (
        <div className="container-fluid">
            <h1 className="h3 text-gray-800 mb-2">Add New foods</h1>
            <Link to="/admin/foods" className="btn btn-secondary mb-2">Back</Link>
            <div className="card shadow mb-4">
                <div className="card-body">
                    {error && <div className="alert alert-danger">{error}</div>}
                    {successMessage && <div className="alert alert-success">{successMessage}</div>}
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label>Name:</label>
                            <input type="text"
                                name="name"
                                value={foodsData.name}
                                onChange={handleInputChange}
                                className="form-control"
                                required />
                        </div>
                        <div className="form-group">
                            <label>Description:</label>
                            <input type="text"
                                name="description"
                                value={foodsData.description}
                                onChange={handleInputChange}
                                className="form-control"
                                required />
                        </div>
                        <div className="form-group">
                            <label>Price:</label>
                            <input type="number"
                                name="price"
                                value={foodsData.price}
                                onChange={handleInputChange}
                                className="form-control"
                                required />
                        </div>
                        <div className="form-group">
                            <label>image_url:</label>
                            <input type="text"
                                name="image_url"
                                value={foodsData.image_url}
                                onChange={handleInputChange}
                                className="form-control"
                                required/>
                        </div>
                        <div className="form-group">
                            <label>restaurant_id :</label>
                            <input type="number"
                                name="restaurant_id"
                                value={foodsData.restaurant_id}
                                onChange={handleInputChange}
                                className="form-control"
                                required />
                        </div>
                        <div className="form-group">
                            <label>cuisine_id  :</label>
                            <input type="number"
                                name="cuisine_id"
                                value={foodsData.cuisine_id}
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

export default FoodsCreate;