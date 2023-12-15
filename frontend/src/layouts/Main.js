import React from "react";
import {Routes,Route,Link} from 'react-router-dom';
import Home from "./Home";
import DetailProduct from "./DetailProduct";
import Listing from "./Listing";
import Payment from "./Payment";
import ProfileWishlist from "./ProfileWishlist";
import ProfileOrder from "./ProfileOrder";
import ProfileSetting from "./ProfileSetting";
import ProfileAddress from "./ProfileAddress";
import ProfileSeller from "./ProfileSeller";
import ShoppingCart from "./ShoppingCart";
import ProfileMain from "./ProfileMain";
import Category from "./Category";
import Offer from "./Offer";
import UserLogin from "./UserLogin";
import UserRegister from "./UserRegister";
import UserLocalStorage from "./UserLocalStorage";
import UserLogout from "./Logout";
const Main = () =>(
    <main>
        <Routes>
            <Route path="/"element={<Home/>}/>
            <Route path="/detailProduct"element={<DetailProduct/>}/>
            <Route path="/listing"element={<Listing/>}/>
            <Route path="/payment"element={<Payment/>}/>
            <Route path="/profile/wishlist"element={<ProfileWishlist/>}/>
            <Route path="/profile/order"element={<ProfileOrder/>}/>
            <Route path="/profile/setting"element={<ProfileSetting/>}/>
            <Route path="/profile/address"element={<ProfileAddress/>}/>
            <Route path="/profile/main"element={<ProfileMain/>}/>
            <Route path="/profile/seller"element={<ProfileSeller/>}/>
            <Route path="/shopping/cart"element={<ShoppingCart/>}/>
            <Route path="/category/category_card"element={<Category/>}/>
            <Route path="/offer/offer_card"element={<Offer/>}/>
            <Route path="/login"element={<UserLogin/>}/>
            <Route path="/logout"element={<UserLogout/>}/>
            <Route path="/register"element={<UserRegister/>}/>
            <Route path="/localstorage"element={<UserLocalStorage/>}/>
        </Routes>
    </main>
)
export default Main