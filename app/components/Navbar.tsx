import Link from "next/link";
import { contents } from "../contents/contents";

export default function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light fixed-top shadow-sm"
      id="mainNav"
    >
      <div className="container px-5">
        <img src="./logo.png" alt="cryptomask-logo" className="logo" />
        <Link className="navbar-brand fw-bold" href="/#page-top">
          {contents.common.websiteName}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="bi-list"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ms-auto me-4 my-3 my-lg-0">
            <li className="nav-item">
              <a className="nav-link me-lg-3" href="/#features">
                Features
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link me-lg-3" href="/#download">
                Download
              </a>
            </li>
          </ul>
          <Link href="/contact-us">
            <button
              className="btn btn-primary rounded-pill px-3 mb-2 mb-lg-0"
              data-bs-toggle="modal"
              data-bs-target="#feedbackModal"
            >
              <span className="d-flex align-items-center">
                <i className="bi-headset me-2"></i>
                <span className="small">Contact us</span>
              </span>
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
