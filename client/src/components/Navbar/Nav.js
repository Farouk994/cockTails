import React from "react";



function Nav() {
  return (
    <div>
      <nav
        classname="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light"
        id="ftco-navbar"
      >
        <div classname="container">
          <a classname="navbar-brand" href="index.html">
            Liquor <span>store</span>
          </a>
          <div classname="order-lg-last btn-group">
            <a
              href="#"
              classname="btn-cart dropdown-toggle dropdown-toggle-split"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <span classname="flaticon-shopping-bag"></span>
              <div classname="d-flex justify-content-center align-items-center">
                <small>3</small>
              </div>
            </a>
            <div classname="dropdown-menu dropdown-menu-right">
              <div classname="dropdown-item d-flex align-items-start" href="#">
                <div
                  classname="img"
                  //   style={{background-image: url(images/prod-1.jpg)}}
                ></div>
                <div classname="text pl-3">
                  <h4>Bacardi 151</h4>
                  <p classname="mb-0">
                    <a href="#" classname="price">
                      $25.99
                    </a>
                    <span classname="quantity ml-3">Quantity: 01</span>
                  </p>
                </div>
              </div>
              <div classname="dropdown-item d-flex align-items-start" href="#">
                <div
                  classname="img"
                  //   style="background-image: url(images/prod-2.jpg);"
                ></div>
                <div classname="text pl-3">
                  <h4>Jim Beam Kentucky Straight</h4>
                  <p classname="mb-0">
                    <a href="#" classname="price">
                      $30.89
                    </a>
                    <span classname="quantity ml-3">Quantity: 02</span>
                  </p>
                </div>
              </div>
              <div classname="dropdown-item d-flex align-items-start" href="#">
                <div
                  classname="img"
                  //   style="background-image: url(images/prod-3.jpg);"
                ></div>
                <div classname="text pl-3">
                  <h4>Citadelle</h4>
                  <p classname="mb-0">
                    <a href="#" classname="price">
                      $22.50
                    </a>
                    <span classname="quantity ml-3">Quantity: 01</span>
                  </p>
                </div>
              </div>
              <a
                classname="dropdown-item text-center btn-link d-block w-100"
                href="cart.html"
              >
                View All
                <span classname="ion-ios-arrow-round-forward"></span>
              </a>
            </div>
          </div>

          <button
            classname="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#ftco-nav"
            aria-controls="ftco-nav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span classname="oi oi-menu"></span> Menu
          </button>

          <div classname="collapse navbar-collapse" id="ftco-nav">
            <ul classname="navbar-nav ml-auto">
              <li classname="nav-item active">
                <a href="index.html" classname="nav-link">
                  Home
                </a>
              </li>
              <li classname="nav-item">
                <a href="about.html" classname="nav-link">
                  About
                </a>
              </li>
              <li classname="nav-item dropdown">
                <a
                  classname="nav-link dropdown-toggle"
                  href="#"
                  id="dropdown04"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Products
                </a>
                <div classname="dropdown-menu" aria-labelledby="dropdown04">
                  <a classname="dropdown-item" href="product.html">
                    Products
                  </a>
                  <a classname="dropdown-item" href="product-single.html">
                    Single Product
                  </a>
                  <a classname="dropdown-item" href="cart.html">
                    Cart
                  </a>
                  <a classname="dropdown-item" href="checkout.html">
                    Checkout
                  </a>
                </div>
              </li>
              <li classname="nav-item">
                <a href="blog.html" classname="nav-link">
                  Blog
                </a>
              </li>
              <li classname="nav-item">
                <a href="contact.html" classname="nav-link">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
