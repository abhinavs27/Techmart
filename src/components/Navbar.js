import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./main.css";

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navcol ">
        <Link to="/" className="logo ml-3" style={{ color: "#ffffff" }}>
          Catosoft E-commerce Services
        </Link>

             <div class="navbar-collapse collapse w-100 order-3 dual-collapse2">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <Link to="/" className=" product mr-4 pt-5">
                Home
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/cart" className=" ">
                <button className=" btn btn-primary">
                  <i className="fas fa-cart-plus mr-2" />
                  <span>Shopping Cart </span>
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
