import React from "react";

import Subscribe from "../pages/home/Subscribe";
import Address from "../pages/profile/Address";




const ProfileAddress = () =>(
    <>
    <div class="container">
    <section class="section-pagetop bg-gray">
<div class="container">
	<h2 class="title-page">My account</h2>
</div> 
</section>
    <Address/>
    </div>
    <Subscribe/>
    </>
)
export default ProfileAddress