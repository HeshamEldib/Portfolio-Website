import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBarsStaggered } from "@fortawesome/free-solid-svg-icons";
import "./navbar.css";

export default function Navbar() {
  const [show, setShow] = useState("");
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        setShow("show");
      } else setShow("");
    });
  }, []);

  return (
    <header className={show}>
      <div className="container h-100">
        <nav className="navbar navbar-expand-lg h-100 bg-transparent">
          <div className="container-fluid p-0">
            <Logo />
            <NavbarIcon />
            <NavbarLinks />
          </div>
        </nav>
      </div>
    </header>
  );
}

function Logo() {
  return (
    <div className="logo">
      <Link to="/Portfolio-Website" className="navbar-brand">
        Hesham Eldib
      </Link>
    </div>
  );
}

function NavbarIcon() {
  return (
    <button
      className="navbar-toggler icon"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <FontAwesomeIcon icon={faBarsStaggered} />
    </button>
  );
}

function NavbarLinks() {
  return (
    <div
      className="collapse navbar-collapse justify-content-end menu"
      id="navbarNav"
    >
      <ul className="navbar-nav">
        <NavbarLink name="Home" path="/Portfolio-Website/" />
        <NavbarLink name="Projects" path="/Portfolio-Website/projects/" />
      </ul>
    </div>
  );
}

interface NavbarLinkProps {
  name: string;
  path: string;
}
function NavbarLink({ name, path }: NavbarLinkProps) {
  const location = useLocation();

  return (
    <li className="nav-item">
      <Link
        className={location.pathname === path ? "nav-link active" : "nav-link"}
        aria-current="page"
        to={path}
      >
        {name}
      </Link>
    </li>
  );
}
