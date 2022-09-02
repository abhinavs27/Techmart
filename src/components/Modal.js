import React, { Component } from "react";
import { ProductConsumer } from "../Context";
import { Link } from "react-router-dom";

export default class Modal extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          const { modalOpen, closeModal } = value;
          const { img, title, price } = value.modalProduct;
          if (!modalOpen) {
            return null;
          } else {
            return (
              <div className="modalContainer">
                <div className="container">
                  <div className="row">
                    <div
                      className="col-8 mx-auto col-md-6 col-lg-4 p-5 text-center text-capitalize"
                      id="modal"
                    >
                      <h5>item added to cart</h5>
                      <img src={img} className="img-fluid" alt="" />
                      <h5>{title}</h5>
                      <h5 className="text-muted">price : Rs.{price}</h5>
                      <Link to="/">
                        <button
                          className="btn btn-outline-primary font-weight-bold mr-4 mb-3"
                          onClick={() => {
                            closeModal();
                          }}
                        >
                          Continue Shopping
                        </button>
                      </Link>
                      <Link to="/cart">
                        <button
                          className="btn btn-outline-warning font-weight-bold"
                          cart
                          onClick={() => {
                            closeModal();
                          }}
                        >
                          Go To Cart
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          }
        }}
      </ProductConsumer>
    );
  }
}
