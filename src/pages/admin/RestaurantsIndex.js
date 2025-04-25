import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const RestaurantsIndex = () => {
    const [restaurants, setRestaurants] = useState([]);
    const loadRestaurants = () => {
        axios.get('http://127.0.0.1:8000/api/restaurants')
        .then(Response => {
            setRestaurants(Response.data);
        })
        .catch(Error => {
            alert('Eror Fetching Data: ', Error);
        });
    };

    const handleDelete = (id) => {
        if(window.confirm('Are you sure want to delete this data restaurants?')) {
            axios.delete(`http://127.0.0.1:8000/api/restaurants/${id}`)
            .then(() => {
                alert('Data deleted successfully');
                loadRestaurants();
            })
            .catch(Error => {
                alert('Error deleting the data: ', Error);
            });
        }
    };

    useEffect(() => {
        loadRestaurants();
    }, []);

    return (
        <div className="container-fluid">
            <h1 className="h3 text-bg-gray-800 mb-2">restaurants Data</h1>
            <Link to="/admin/restaurants/create" className="btn btn-primary mb-2">Create</Link>
            <div className="card shadow mb-4">
                <div className="card-body">
                    <div className="table-responsive" style={{ overflowX: 'auto', maxHeight: '600px' }}>
                        <table className="table table-bordered" width="100%" cellSpacing="0">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Location</th>
                                    <th>rating</th>
                                    <th>cuisine_id</th>
                                    <th>description</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {restaurants.map((restaurantss, index) => (
                                    <tr key={index}>
                                        <td>{restaurantss.id}</td>
                                        <td>{restaurantss.name}</td>
                                        <td>{restaurantss.location}</td>
                                        <td>{restaurantss.rating}</td>
                                        <td>{restaurantss.cuisine?.id}</td>
                                        <td>{restaurantss.cuisine?.name}</td>
                                        <td>{restaurantss.description}</td>
                                        <td>
                                            <Link to={`/admin/restaurants/update/${restaurantss.id}`} className="btn btn-sm btn-info">Edit</Link>
                                            <button 
                                                onClick={() => handleDelete(restaurantss.id)}
                                                className="btn btn-sm btn-danger ml-1">Delete</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default RestaurantsIndex;