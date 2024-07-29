import React from "react";
import './CSS/Carousel.css'

function Carousel() {
  return (
    <div className="container-fluid p-0 carousel">
      <div className="img-div">
        <img src="/Images/slide1.jpg " alt="" className="image-fluid" width={"100%"}/>
        <div className="container w-50 carousel-content">
        <div className="">
          <h3 className="text-warning py-1 px-5 carousel-head">Welcome to our restaurant</h3>
        </div>
        <div>
          <h2 className="text-light py-2 px-5">Choosing tasty Premium Restaurant & Cafe</h2>
        </div>
        <div>
          <p className="lead text-light px-5">
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliquauis
            ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
            accumsan lacus vel facilisis and the part commodo of life.{" "}
          </p>
          <div className="px-5">
            <button className="btn btn-outline-warning fw-semibold">Order Now</button>
            <button className="btn btn-outline-light fw-semibold mx-3"><i class="fa fa-cutlery" aria-hidden="true"></i> See Menu</button>
          </div>
        </div>
      </div>
      </div>
      
    </div>
  );
}

export default Carousel;
