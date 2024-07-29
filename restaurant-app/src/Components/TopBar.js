import React from "react";

function TopBar() {
  return (
    <div className="container-fluid p-0 ">
      <div className="topBar d-flex justify-content-around">
      <div className="d-flex w-75 justify-content-evenly">
        <div className="topBar-email my-2">
        <i class="fa fa-envelope h5 mx-2" aria-hidden="true"></i>
          <a className="" href="mailto:tfcfamilyrestaurant@gmail.com">
            tfcfamilyrestaurant@gmail.com
          </a>
        </div>
        <div className="topBar-mobile my-2">
        <i class="fa fa-phone-square h5 mx-2" aria-hidden="true"></i>
          <a href="tel:9097790477">+91 9097790477</a>
        </div>
      </div>
      <div className="social my-2">
        <a className="m-2" title="Facebook" href="123654"><i class="fa fa-facebook-square h5" aria-hidden="true"></i></a>
        <a className="m-2" title="Twitter" href="123654"><i class="fa fa-twitter-square h5" aria-hidden="true"></i></a>
        <a className="m-2" title="Instagram" href="123654"><i class="fa fa-instagram h5" aria-hidden="true"></i></a>
        <a className="m-2" title="Youtube" href="123654"><i class="fa fa-youtube-play h5" aria-hidden="true"></i>
</a>
      </div>
      </div>
    </div>
  );
}

export default TopBar;
