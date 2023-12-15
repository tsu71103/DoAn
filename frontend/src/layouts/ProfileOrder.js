import React from "react";

import Subscribe from "../pages/home/Subscribe";

import Order from "../pages/profile/Order";




const ProfileOrder = () =>(
    <>
    <div class="container">
    <section class="section-pagetop bg-gray">
<div class="container">
	<h2 class="title-page">My account</h2>
</div> 
</section>
    <Order/>
    </div>
    <Subscribe/>
    </>
)
export default ProfileOrder