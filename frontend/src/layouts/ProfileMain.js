import React from "react";

import Subscribe from "../pages/home/Subscribe";
import Main from "../pages/profile/Main";




const ProfileMain = () =>(
    <>
    <div class="container">
    <section class="section-pagetop bg-gray">
<div class="container">
	<h2 class="title-page">My account</h2>
</div> 
</section>
    <Main/>
    </div>
    <Subscribe/>
    </>
)
export default ProfileMain