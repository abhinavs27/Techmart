import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./main.css";

export default class SideNav extends Component {
  constructor() {
    super();
    this.state = {
      searchData: null,
    };
  }

  search = (key) => {
    console.log(key);
  };

  render() {
    return (
      <nav id="sidebar">
        <form>
          <form class="form-inline my-2 my-lg-0">
            <input
              class="form-control mr-sm-2 searchbar"
              type="text"
              placeholder="Search..."
              onChange={(event) => this.search(event.target.value)}
            />
          </form>
          <div class="form-group mt-3">
            <label>Category:</label>
            <select class="form-control select">
              <option>All</option>
              <option>Apple</option>
              <option>Dell</option>
              <option>Hp</option>
              <option>Lenovo</option>
            </select>
          </div>
        </form>
      </nav>
    );
  }
}
