import React from "react";

import Subscribe from "../pages/home/Subscribe";
import Seller from "../pages/profile/Seller";




const ProfileSeller = () =>(
    <>
    <div class="container">
    <section class="section-pagetop bg-gray">
<div class="container">
	<h2 class="title-page">My account</h2>
</div> 
</section>
    <Seller/>
    </div>
    <Subscribe/>
    </>
)
export default ProfileSeller