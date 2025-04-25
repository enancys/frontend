import React, { useState, useEffect, useCallback } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const FoodsUpdate = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    console.log('foods ID:', id);
    const [foodsData, setFoodsData] = useState({
        name: "",
        description: "",
        price: "",
        image_url    : "",
        restaurant_id: "",
        cuisine_id : ""
    });

    const getFoods = useCallback(() => {
        axios.get(`http://127.0.0.1:8000/api/foods/${id}`)
        .then(Response => {
            const { name, description, price, image_url, restaurant_id, cuisine_id  } = Response.data;
            setFoodsData({ name, description, price, image_url, restaurant_id, cuisine_id });
        })
        .catch(Error => {
            alert('Error fetching foods details: ', Error);
        });
    }, [id]);

    useEffect(() => {
        getFoods();
    }, [getFoods]);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFoodsData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.put(`http://127.0.0.1:8000/api/foods/${id}`, foodsData)
        .then(Response => {
            alert('foods updated successfully: ', Response.data);
            navigate('/admin/foods');
        })
        .catch(Error => {
            console.error('Error updating foods: ', Error);
        });
    }

    return (
        <div className="container-fluid">
            <h1 className="h3 text-gray-800 mb-2">Edit Foods</h1>
            <div className="card shadow mb-4">
                <div className="card-body">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label>Name:</label>
                            <input type="text"
                                name="name"
                                value={foodsData.name}
                                onChange={handleInputChange}
                                className="form-control"
                                required/>
                        </div>
                        <div className="form-group">
                            <label>Description:</label>
                            <input type="text"
                                name="description"
                                value={foodsData.description}
                                onChange={handleInputChange}
                                className="form-control"
                                required/>
                        </div>
                        <div className="form-group">
                            <label>price:</label>
                            <input type="text"
                                name="price"
                                value={foodsData.price}
                                onChange={handleInputChange}
                                className="form-control"
                                required/>
                        </div>
                        <div className="form-group">
                            <label>image_url:</label>
                            <input type="text"
                                name="Image_url"
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
                                required/>
                        </div>
                        <div className="form-group">
                            <label>cuisine_id :</label>
                            <input type="number"
                                name="cuisine_id"
                                value={foodsData.cuisine_id}
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

export default FoodsUpdate;