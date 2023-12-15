import React from "react";

import Subscribe from "../pages/home/Subscribe";
import Wishlist from "../pages/profile/Wishlist";




const ProfileWishlist = () =>(
    <>
    <div class="container">
    <section class="section-pagetop bg-gray">
<div class="container">
	<h2 class="title-page">My account</h2>
</div> 
</section>
    <Wishlist/>
    </div>
    <Subscribe/>
    </>
)
export default ProfileWishlist