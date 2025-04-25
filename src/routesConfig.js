// import React from "react";
// import { Routes, Route } from "react-router-dom";

import Dashboard from "./pages/admin/adminDashboard";
import UserIndex from "./pages/admin/UserIndex";
import UserCreate from "./pages/admin/UserCreate";
import UserUpdate from "./pages/admin/UserUpdate";
import CuisinesIndex from "./pages/admin/CuisinesIndex";
import CuisinesCreate from "./pages/admin/CuisinesCreate";
import CuisinesUpdate from "./pages/admin/CuisinesUpdate";
import RestaurantsIndex from "./pages/admin/RestaurantsIndex";
import RestaurantsCreate from "./pages/admin/RestaurantsCreate";
import RestaurantsUpdate from "./pages/admin/RestaurantsUpdate";
import FoodsIndex from "./pages/admin/FoodsIndex";
import FoodsCreate from "./pages/admin/FoodsCreate";
import FoodsUpdate from "./pages/admin/FoodsUpdate";
import User_preferencesIndex from "./pages/admin/User_preferencesIndex";
import User_preferencesCreate from "./pages/admin/User_preferencesCreate";
import User_preferencesUpdate from "./pages/admin/User_preferencesUpdate";
import IngredientsIndex from "./pages/admin/IngredientsIndex";
import IngredientsCreate from "./pages/admin/IngredientsCreate";
import IngredientsUpdate from "./pages/admin/IngredientsUpdate";
import Foods_ingredientsIndex from "./pages/admin/Food_ingredientsIndex";
import Food_ingredientsCreate from "./pages/admin/Food_ingredientsCreate";
import Food_ingredientsUpdate from "./pages/admin/Food_ingredientsUpdate";
import Restaurant_foodsIndex from "./pages/admin/Restaurant_foodsIndex";
import Restaurant_foodsCreate from "./pages/admin/Restaurant_foodsCreate";
import Restuarnt_foodsUpdate from "./pages/admin/Restaurant_foodsUpdate";
import RatingsIndex from "./pages/admin/RatingsIndex";
import RatingsCreate from "./pages/admin/RatingsCreate";
import RatingsUpdate from "./pages/admin/RatingsUpdate";
import CategoriesIndex from "./pages/admin/CategoriesIndex";
import CategoriesCreate from "./pages/admin/CategoriesCreate";
import CategoriesUpdate from "./pages/admin/CategoriesUpdate";
import UserFavoriteCategoriesIndex from "./pages/admin/UserFavoriteCategoriesIndex.js";
import UserFavoriteCategoriesCreate from "./pages/admin/UserFavoriteCategoriesCreate.js";
import UserFavoriteCategoriesUpdate from "./pages/admin/UserFavoriteCategoriesUpdate.js";
import UserFavoriteIngredientsIndex from "./pages/admin/UseFavoriteIngredientsIndex.js";
import UserFavoriteIngredientsCreate from "./pages/admin/UserFavoriteIngredientsCreate.js";
import UserFavoriteIngredientsUpdate from "./pages/admin/UserFavoriteIngredientsUpdate.js";
import FoodTagsIndex from "./pages/admin/FoodTagsIndex.js";
import FoodTagsCreate from "./pages/admin/FoodTagsCreate.js";
import FoodTagsUpdate from "./pages/admin/FoodTagsUpdate.js";
import TagsIndex from "./pages/admin/TagsIndex.js";
import TagsUpdate from "./pages/admin/TagsUpdate.js";
import TagsCreate from "./pages/admin/TagsCreate.js";
import RestrictionsIndex from "./pages/admin/RestrictionsIndex.js";
import RestrictionsCreate from "./pages/admin/RestrictionsCreate.js";
import RestrictionsUpdate from "./pages/admin/RestrictionsUpdate.js";
import UserDietaryRestrictionsIndex from "./pages/admin/UserDietaryRestrictionsIndex.js";
import UserDietaryRestrictionsCreate from "./pages/admin/UserDietaryRestrictionsCreate.js";
import UserDietaryRestrictionsUpdate from "./pages/admin/UserDietaryRestrictionsUpdate.js";
import UserDislikedIngredientsIndex from "./pages/admin/UserDislikedIngredientsIndex.js";
import UserDislikedIngredientsCreate from "./pages/admin/UserDislikedIngredientsCreate.js";
import UserDislikedIngredientsUpdate from "./pages/admin/UserDislikedIngredientsUpdate.js";
import UserFavoriteCuisinesIndex from "./pages/admin/UserFavoriteCuisinesIndex.js";
import UserFavoriteCuisinesUpdate from "./pages/admin/UserFavoriteCuisinesUpdate.js";
import UserFavoriteCuisinesCreate from "./pages/admin/UserFavoriteCuisinesCreate.js";



const routesConfig = [
    { path: "dashboard", component: Dashboard },
    { path: "user", component: UserIndex },
    { path: "user/create", component: UserCreate },
    { path: "user/update/:id", component: UserUpdate },
    { path: "cuisines", component: CuisinesIndex },
    { path: "cuisines/create", component: CuisinesCreate },
    { path: "cuisines/update/:id", component:  CuisinesUpdate},
    { path: "restaurants", component: RestaurantsIndex },
    { path: "restaurants/create", component: RestaurantsCreate },
    { path: "restaurants/update/:id", component:  RestaurantsUpdate},
    { path: "foods", component: FoodsIndex },
    { path: "foods/create", component: FoodsCreate },
    { path: "foods/update/:id", component:  FoodsUpdate},
    { path: "user_preferences", component: User_preferencesIndex },
    { path: "user_preferences/create", component: User_preferencesCreate },
    { path: "user_preferences/update/:id", component:  User_preferencesUpdate},
    { path: "ingredients", component: IngredientsIndex },
    { path: "ingredients/create", component: IngredientsCreate },
    { path: "ingredients/update/:id", component:  IngredientsUpdate},
    { path: "food_ingredients", component: Foods_ingredientsIndex },
    { path: "food_ingredients/create", component: Food_ingredientsCreate },
    { path: "food_ingredients/update/:id", component:  Food_ingredientsUpdate},
    { path: "restaurant_foods", component: Restaurant_foodsIndex },
    { path: "restaurant_foods/create", component: Restaurant_foodsCreate },
    { path: "restaurant_foods/update/:id", component:  Restuarnt_foodsUpdate},
    { path: "ratings", component: RatingsIndex },
    { path: "ratings/create", component: RatingsCreate },
    { path: "ratings/update/:id", component: RatingsUpdate},
    { path: "categories", component: CategoriesIndex },
    { path: "categories/create", component: CategoriesCreate },
    { path: "categories/update/:id", component: CategoriesUpdate},
    { path: "user_favorite_categories", component: UserFavoriteCategoriesIndex},
    { path: "user_favorite_categories/create", component: UserFavoriteCategoriesCreate },
    { path: "user_favorite_categories/update/:id", component: UserFavoriteCategoriesUpdate},
    { path: "user_favorite_ingredients", component: UserFavoriteIngredientsIndex},
    { path: "user_favorite_ingredients/create", component: UserFavoriteIngredientsCreate },
    { path: "user_favorite_ingredients/update/:id", component: UserFavoriteIngredientsUpdate},
    { path: "tags", component: TagsIndex},
    { path: "tags/create", component: TagsCreate},
    { path: "tags/update/:id", component: TagsUpdate},
    { path: "food_tags", component: FoodTagsIndex},
    { path: "food_tags/create", component: FoodTagsCreate},
    { path: "food_tags/update/:id", component: FoodTagsUpdate},
    { path: "restrictions", component: RestrictionsIndex},
    { path: "restrictions/create", component: RestrictionsCreate},
    { path: "restrictions/update/:id", component: RestrictionsUpdate},
    { path: "user_dietary_restrictions", component: UserDietaryRestrictionsIndex},
    { path: "user_dietary_restrictions/create", component: UserDietaryRestrictionsCreate},
    { path: "user_dietary_restrictions/update/:id", component: UserDietaryRestrictionsUpdate},
    { path: "user_disliked_ingredients", component: UserDislikedIngredientsIndex},
    { path: "user_disliked_ingredients/create", component: UserDislikedIngredientsCreate},
    { path: "user_disliked_ingredients/update/:id", component: UserDislikedIngredientsUpdate},
    { path: "user_favorite_cuisines", component: UserFavoriteCuisinesIndex},
    { path: "user_favorite_cuisines/create", component: UserFavoriteCuisinesCreate},
    { path: "user_favorite_cuisines/update/:id", component: UserFavoriteCuisinesUpdate},


];

export default routesConfig;

