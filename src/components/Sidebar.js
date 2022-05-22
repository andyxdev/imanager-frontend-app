import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div
      class="col-md-3 col-lg-2 sidebar-offcanvas pl-0"
      id="sidebar"
      role="navigation"
      style={{ backgroundColor: "#e9ecef" }}
    >
      <ul class="nav flex-column sticky-top pl-0 pt-5 p-3 mt-3">
        <li class="nav-item mb-2 mt-3">
          <a class="nav-link text-secondary" href="#">
            <h5>Andile Mazibuko</h5>
          </a>
        </li>
        <li class="nav-item mb-2 ">
          <Link to={`/installation`}>
            <i class="fas fa-plus font-weight-bold"></i>{" "}
            <span className="ml-3">New</span>
          </Link>
        </li>
        <li class="nav-item mb-2">
          <a
            class="nav-link text-secondary"
            href="#submenu1"
            data-toggle="collapse"
            data-target="#submenu1"
          >
            <i class="far fa-file-word font-weight-bold"></i>{" "}
            <span className="ml-3"> Reports▾</span>
          </a>
          <ul
            class="list-unstyled flex-column pl-3 collapse"
            id="submenu1"
            aria-expanded="false"
          >
            <li class="nav-item mb-2 ">
              <a class="nav-link text-secondary" href="">
                <i class="fas fa-book-reader"></i> Data Report{" "}
              </a>
            </li>
            <li class="nav-item mb-2 ">
              <a class="nav-link text-secondary" href="">
                {" "}
                <i class="fas fa-book-medical"></i> File Report{" "}
              </a>
            </li>
          </ul>
        </li>
        <li class="nav-item mb-2">
          <Link to={`/installations`}>
            <i class="far fa-toolbox font-weight-bold"></i>{" "}
            <span className="ml-3">Installations</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
