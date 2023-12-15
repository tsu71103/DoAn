import React from "react";
// import '../../assets/js/bootstrap.bundle.min.js'
import '../../assets/js/bootstrap.bundle.min.js'
const Slider =()=>(
    <section class="section-main padding-y">
<main class="card">
	<div class="card-body">

  <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>

  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
    <img src={require("../../assets/images/banners/mixishop2.jpg")}style={{width:"100%"}} alt="First slide"/>
    </div>
    <div class="carousel-item">
    <img src={require("../../assets/images/banners/mixishop4.jpg")}style={{width:"100%"}}  alt="Second slide"/>
    </div>
    
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>


	</div> 

</main> 


</section>
);
export default Slider

