import { NavbarCollapse } from "react-bootstrap";
import "./Navbar.css";

function Navbar() {
  return (
    <>
      <nav>
        <a href="index.html">
          <svg
            id="logo-35"
            width="50"
            height="39"
            viewBox="0 0 50 39"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {" "}
            <path
              d="M16.4992 2H37.5808L22.0816 24.9729H1L16.4992 2Z"
              class="ccompli1"
              fill="#007AFF"
            ></path>{" "}
            <path
              d="M17.4224 27.102L11.4192 36H33.5008L49 13.0271H32.7024L23.2064 27.102H17.4224Z"
              class="ccustom"
              fill="#312ECB"
            ></path>{" "}
          </svg>

          <button>
            <div class="bx bx-chevron-right arrow "> </div>
          </button>
        </a>

        <div>
          <div>
            {" "}
            <i id="glass" class="bx bx-search icon"></i>
            <input id="search" type="search" placeholder="search..." />
          </div>

          <ul id="navbar">
            <li>
              <i className="bx bx-home-alt icon"></i>
              <span className="text nav-text">
                <a className="active" href="index.html">
                  {" "}
                  Dashboard{" "}
                </a>
              </span>
            </li>

            <li>
              <i class="bx bx-package icon"></i>
              <span className="text nav-text">
                <a href="index.html">Products</a>{" "}
              </span>
            </li>
            <li>
              <i className="bx bx-user-circle icon"></i>
              <span className="text nav-text">
                <a href="index.html">Customers</a>{" "}
              </span>
            </li>

            <li>
              <i className="bx bx-wallet icon"></i>
              <span className="text nav-text">
                <a href="index.html">Income</a>{" "}
              </span>
            </li>

            <li>
              <i class="bx bxs-offer icon"></i>
              <span className="text nav-text">
                <a href="index.html">Promote</a>{" "}
              </span>
            </li>

            <li>
              <i className="bx bx-help-circle icon"></i>
              <span className="text nav-text">
                <a href="index.html">Help</a>
              </span>
            </li>
          </ul>
        </div>
      </nav>

      <div>
        <div className="name">
          <h5> Hello Tarun,</h5>
        </div>

        <ul className="box-info">
          <li>
            <a href="#">
              <i class="bx bx-dollar-circle"></i>{" "}
            </a>
            <span class="text">
              <h6>
                <p> earning</p>
              </h6>
              <h2>$198k</h2>
              <h6>
                <p>37.8% this month </p>
              </h6>
            </span>
          </li>

          <li>
            <a href="#">
              <i class="bx bx-notepad"></i>
            </a>
            <span class="text">
              <h6>
                <p> Orders</p>
              </h6>
              <h2>$2.4k</h2>
              <h6>
                <p>2% this month </p>
              </h6>
            </span>
          </li>

          <li>
            <a href="#">
              <i class="bx bx-wallet"></i>
            </a>
            <span class="text">
              <h6>
                <p> balance</p>
              </h6>
              <h2>$2.4k</h2>
              <h6>
                <p>2% this month </p>
              </h6>
            </span>
          </li>

          <li>
            <a href="#">
              <i class="bx bx-shopping-bag"></i>
            </a>
            <span class="text">
              <h6>
                <p> Total Sales</p>
              </h6>
              <h2>$89k</h2>
              <h6>
                <p>11% this week </p>
              </h6>
            </span>
          </li>
        </ul>
      </div>

      <div>
        <p className="overview"> Overview </p>
      </div>

      <div className="chart">
        <img src="https://dhtmlx.com/blog/wp-content/uploads/2019/06/Bar-chart.png" />
      </div>

      <div className="doughnut">
        <img src="https://365datascience.com/resources/blog/2018-07-9-Pie-chart.png" />
      </div>
    </>
  );
}
export default Navbar;
