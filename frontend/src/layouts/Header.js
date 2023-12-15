import React, { Component, useEffect, useState } from "react";
import logo from "../assets/images/logo06.png";
import { GET_ALL } from "../pages/api/apiService";
function Header() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    GET_ALL(`categories`).then((item) => setCategories(item.data));
  }, []);
  return (
    <header class="section-header">
      <section class="header-main border-bottom">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-xl-2 col-lg-3 col-md-12">
              <a href="/" class="brand-wrap">
                <img class="logo" src={logo} />
              </a>
            </div>
            <div class="col-xl-6 col-lg-5 col-md-6">
              <form action="#" class="form-group">
                <div class="input-group w-100">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Search"
                  />

                  <div class="input-group-append">
                    <button type="button" class="btn btn">
                      <i class="fa fa-search"></i>
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div class="col-xl-4 col-lg-4 col-md-6">
              <div class="widgets-wrap float-md-right">
              <div class="widget-header mr-3">
                  <a href="/login" class="widget-view">
                    <div class="icon-area">
                      <i class="fa fa-user"></i>
                      <span class="notify">3</span>
                    </div>
                    <small class="text"> Login </small>
                  </a>
                </div>
                <div class="widget-header mr-3">
                  <a href="/logout" class="widget-view">
                    <div class="icon-area">
                      <i class="fa fa-user"></i>
                      <span class="notify">3</span>
                    </div>
                    <small class="text"> Logout </small>
                  </a>
                </div>
                
                <div class="widget-header mr-3">
                  <a href="/profile/main" class="widget-view">
                    <div class="icon-area">
                      <i class="fa fa-user"></i>
                      <span class="notify">3</span>
                    </div>
                    <small class="text"> My profile </small>
                  </a>
                </div>
                
                <div class="widget-header mr-3">
                  <a href="#" class="widget-view">
                    <div class="icon-area">
                      <i class="fa fa-comment-dots"></i>
                      <span class="notify">1</span>
                    </div>
                    <small class="text"> Message </small>
                  </a>
                </div>
                <div class="widget-header mr-3">
                  <a href="/profile/order " class="widget-view">
                    <div class="icon-area">
                      <i class="fa fa-store"></i>
                    </div>
                    <small class="text"> Orders </small>
                  </a>
                </div>
                <div class="widget-header">
                  <a href="/shopping/cart" class="widget-view">
                    <div class="icon-area">
                      <i class="fa fa-shopping-cart"></i>
                    </div>
                    <small class="text"> Cart </small>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <nav class="navbar navbar-main navbar-expand-lg border-bottom">
        <div class="container">
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#main_nav"
            aria-controls="main_nav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="main_nav">
            <ul class="navbar-nav">
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  data-toggle="dropdown"
                  href="#"
                >
                  {" "}
                  <i class="fa fa-bars text-muted mr-2"></i> Danh mục sản phẩm{" "}
                </a>
                <div class="dropdown-menu dropdown-large">
                  <nav class="row">
                    <div class="col-6">
                    {categories.length >
0 &&
categories.map((row) => (
<a
class="dropdown-item"
href={`/listing?categoryId=${row.id}`}
>
{row.name}
</a>
))}
                      <a class="dropdown-item" href="/listing">
                        Tất cả sản phẩm
                      </a>
                      {/* <a href="page-listing-grid.html">Áo PUBG</a>
                                <a href="page-shopping-cart.html">Áo CSGO</a>
                                <a href="page-detail-product.html">Áo LOL</a> */}
                    </div>
                  </nav>
                </div>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Thông Báo
                </a>
              </li>
          
              
            </ul>
            <ul class="navbar-nav ml-md-auto">
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="http://example.com"
                  data-toggle="dropdown"
                >
                  English
                </a>
                <div class="dropdown-menu dropdown-menu-right">
                  <a class="dropdown-item" href="#">
                    Russian
                  </a>
                  <a class="dropdown-item" href="#">
                    French
                  </a>
                  <a class="dropdown-item" href="#">
                    Spanish
                  </a>
                  <a class="dropdown-item" href="#">
                    Chinese
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
