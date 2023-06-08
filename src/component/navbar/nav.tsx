import { XMarkIcon, Bars3Icon } from "@heroicons/react/24/outline";
import { logoTravelnowWhite } from "../../../public/assets/img";
import Image from "next/image";

export default function Navbar() {
  if (typeof window !== "undefined") {
    // Show Menu
    let navMenu = window.document.getElementById("nav-menu"),
      navClose = window.document.getElementById("nav-close"),
      navToggle = window.document.getElementById("nav-toggle");

    if (navToggle) {
      navToggle.addEventListener("click", () => {
        navMenu?.classList.add("show-menu");
      });
    }

    if (navClose) {
      navClose.addEventListener("click", () => {
        navMenu?.classList.remove("show-menu");
      });
    }
  }

  if (typeof window !== "undefined") {
    // Hide Show Menu
    const navLink = window.document.querySelectorAll(".nav__link");

    const linkAction = () => {
      const navMenu = window.document.getElementById("nav-menu");

      navMenu?.classList.remove("show-menu");
    };
    navLink.forEach((n) => n.addEventListener("click", linkAction));
  }

  if (typeof window !== "undefined") {
    const blurHeader = () => {
      const header = window.document.getElementById("header");
      window.scrollY >= 50
        ? header?.classList.add("blur-header")
        : header?.classList.remove("blur-header");
    };
    window.addEventListener("scroll", blurHeader);
  }

  return (
    <header id="header" className="header">
      <nav className="nav container nav-fixed">
        <a href="#" className="nav nav__logo">
          <Image
            src={logoTravelnowWhite}
            alt="logo-travelnow"
            width={100}
            quality={100}
          />
        </a>

        <div className="nav__menu" id="nav-menu">
          <ul className="nav__list">
            <li className="nav__item">
              <a href="#home" className="nav__link">
                Home
              </a>
            </li>
            <li className="nav__item">
              <a href="#about" className="nav__link">
                About
              </a>
            </li>
            <li className="nav__item">
              <a href="#popular" className="nav__link">
                Popular
              </a>
            </li>
            <li className="nav__item">
              <a href="#explore" className="nav__link">
                Explore
              </a>
            </li>
          </ul>

          {/* -- Close Button */}
          <div className="nav__close" id="nav-close">
            <XMarkIcon width={25} />
          </div>
        </div>

        {/* Toggle Button */}
        <div className="nav__toggle" id="nav-toggle">
          <Bars3Icon width={25} />
        </div>
      </nav>
    </header>
  );
}
