import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const UserFavoriteIngredientsIndex = () => {
    const [userFavoriteIngredients, setUserFavoriteIngredients] = useState([]);
    const loadData = () => {
        axios.get('http://127.0.0.1:8000/api/fav_category_ingredients')
        .then(Response => {
            setUserFavoriteIngredients(Response.data);
        })
        .catch((error) => {
            console.error('Error Fetching Data:', error); 
            alert('Gagal mengambil data. Cek console untuk detail.');
        });
    };

    const handleDelete = (id) => {
        if(window.confirm('Are you sure want to delete this data userFavoriteIngredients?')) {
            axios.delete(`http://127.0.0.1:8000/api/fav_category_ingredients${id}`)
            .then(() => {
                alert('Data deleted successfully');
                loadData();
            })
            .catch(Error => {
                alert('Error deleting the data: ', Error);
            });
        }
    };

    useEffect(() => {
        loadData();
    }, []);

    console.log(userFavoriteIngredients);

    return (

        <div className="container-fluid">
            <h1 className="h3 text-bg-gray-800 mb-2">User Favorite Ingredients Data</h1>
            <Link to="/admin/user_favorite_ingredients/create" className="btn btn-primary mb-2">Create</Link>
            <div className="card shadow mb-4">
                <div className="card-body">
                    <div className="table-table-responsive">
                        <table className="table table-bordered" width="100%" cellSpacing="0">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>User Preference ID</th>
                                    <th>User Preference Name</th>
                                    <th>Ingredient ID</th>
                                    <th>Ingredients Name</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {userFavoriteIngredients.map((favCategorys, index) => (

                                    <tr key={index}>
                                        <td>{favCategorys.id}</td>
                                        <td>{favCategorys.user_preference_id}</td>
                                        <td>{favCategorys.user_preference?.user?.name}</td>
                                        <td>{favCategorys.ingredient_id}</td>
                                        <td>{favCategorys.ingredient?.name}</td>
                                        <td>
                                            <Link to={`/admin/user_favorite_ingredients/update/${favCategorys.id}`} className="btn btn-sm btn-info">Edit</Link>
                                            <button 
                                                onClick={() => handleDelete(favCategorys.id)}
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


export default UserFavoriteIngredientsIndex;