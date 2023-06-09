import Image from "next/image";
import Head from "next/head";
import { MapPinIcon } from "@heroicons/react/24/outline";
import { FaArrowRight, FaArrowUp } from "react-icons/fa";
import {
  logoTravelnowWhite,
  aboutBeach,
  homeBg,
  homeTrees,
  homeLake,
  homeMountain,
  homeBeach,
  popularMountain,
  popularForest,
  popularLake,
  exploreBeach,
  explorePerfil,
  joinIsland,
} from "../../public/assets/img";
import Navbar from "@/component/navbar/nav";

import { Poppins, Montserrat } from "next/font/google";

const popins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export default function Home() {
  if (typeof window !== "undefined") {
    const scrollUp = () => {
      const scrollup = window.document.getElementById("scroll-up");
      window.scrollY >= 350
        ? scrollup?.classList.add("show-scroll")
        : scrollup?.classList.remove("show-scroll");
    };
    window.addEventListener("scroll", scrollUp);
  }
  return (
    <>
      <Head>
        <title>gotravelnow</title>
      </Head>

      {/* ----- Navbar ----- */}
      <Navbar />

      {/* ----- MAIN CONTENT ----- */}
      <main className="main">
        {/* ---- HOME ---- */}
        <section className="home section" id="home">
          <Image
            src={homeBg}
            alt="background image"
            quality={100}
            className="home__bg"
          />
          <div className="home__shadow"></div>

          <div className="home__container container grid">
            <div className="text-center">
              <h3 className={`text-[16px] mb-[1rem] ${montserrat.className}`}>
                Welcome To Gotravelnow
              </h3>

              <h1 className={`text-[40px] mb-[1rem] ${popins.className}`}>
                Explore <br /> The World
              </h1>

              <p
                className={`mb-[2rem] text-gray-300 font-normal ${montserrat.className}`}
              >
                Live the trips exploring the world. Discover paradises, islands,
                mountains, much more, get your trip now
              </p>

              <a href="#" className="button">
                <p className={montserrat.className}>Start Your Journey </p>
                <FaArrowRight className="arrow-right-icon" />
              </a>
            </div>

            {/* <div className="home__cards grid"> */}
            <div className="home__cards grid grid-cols-2">
              <article className="home__card">
                <Image
                  src={homeTrees}
                  alt="home img"
                  quality={100}
                  className="home__card-img w-full object-cover"
                />
                <h3
                  className={`absolute left-[1rem] bottom-[1rem] z-10 ${montserrat.className}`}
                >
                  Croatia
                </h3>
                <div className="home__card-shadow"></div>
              </article>

              <article className="home__card">
                <Image
                  src={homeLake}
                  alt="home img"
                  quality={100}
                  className="home__card-img w-full object-cover"
                />
                <h3
                  className={`absolute left-[1rem] bottom-[1rem] z-10 ${montserrat.className}`}
                >
                  Iceland
                </h3>
                <div className="home__card-shadow"></div>
              </article>

              <article className="home__card">
                <Image
                  src={homeMountain}
                  alt="home img"
                  quality={100}
                  className="home__card-img w-full object-cover"
                />
                <h3
                  className={`absolute left-[1rem] bottom-[1rem] z-10 ${montserrat.className}`}
                >
                  Italy
                </h3>
                <div className="home__card-shadow"></div>
              </article>

              <article className="home__card">
                <Image
                  src={homeBeach}
                  alt="home img"
                  quality={100}
                  className="home__card-img w-full object-cover"
                />
                <h3
                  className={`absolute left-[1rem] bottom-[1rem] z-10 ${montserrat.className}`}
                >
                  Spain
                </h3>
                <div className="home__card-shadow"></div>
              </article>
            </div>
          </div>
        </section>

        {/* ---- ABOUT ---- */}
        <section className="about section" id="about">
          <div className="about__container container grid">
            <div className="text-center">
              <h2 className={`section__title ${popins.className}`}>
                Learn More <br /> About Gotravelnow
              </h2>

              <p
                className={`mb-[2rem] text-gray-300 font-normal ${montserrat.className}`}
              >
                All the trips around the world are great pleasure and happiness
                for anyone, enjoy the sights when your travel the world. Travel
                safely and without worries, get your trip and explore the
                paradises of the world.
              </p>

              <a href="#" className="button">
                <p className={montserrat.className}>Explore Travel</p>
                <FaArrowRight className="arrow-right-icon" />
              </a>
            </div>

            <div className="about__image">
              <Image
                src={aboutBeach}
                alt="about image"
                quality={100}
                className="about__img rounded-[4px]"
              />
              <div className="about__shadow"></div>
            </div>
          </div>
        </section>

        {/* ---- POPULAR ---- */}
        <section className="popular section" id="popular">
          <h2 className={`section__title ${popins.className}`}>
            Enjoy The Beauty <br /> Of The World
          </h2>

          <div className="popular__container container grid">
            <article className="popular__card">
              <div className="popular__image">
                <Image
                  src={popularMountain}
                  alt="popular image"
                  quality={100}
                  className="popular__img rounded-[4px]"
                />
                <div className="popular__shadow"></div>
              </div>

              <h2 className={`popular__title ${montserrat.className}`}>
                Logan Mountain
              </h2>

              <div className="popular__location">
                <MapPinIcon width={16} />
                <span className={montserrat.className}>Canada</span>
              </div>
            </article>

            <article className="popular__card">
              <div className="popular__image">
                <Image
                  src={popularForest}
                  alt="popular image"
                  quality={100}
                  className="popular__img rounded-[4px]"
                />
                <div className="popular__shadow"></div>
              </div>

              <h2 className={`popular__title ${montserrat.className}`}>
                Spike Forest
              </h2>

              <div className="popular__location">
                <MapPinIcon width={16} />
                <span className={montserrat.className}>Irland</span>
              </div>
            </article>

            <article className="popular__card">
              <div className="popular__image">
                <Image
                  src={popularLake}
                  alt="popular image"
                  quality={100}
                  className="popular__img rounded-[4px]"
                />
                <div className="popular__shadow"></div>
              </div>

              <h2 className={`popular__title ${montserrat.className}`}>
                Garda Lake
              </h2>

              <div className="popular__location">
                <MapPinIcon width={16} />
                <span className={montserrat.className}>Italy</span>
              </div>
            </article>
          </div>
        </section>

        {/* ---- EXPLORE ---- */}
        <section className="explore section" id="explore">
          <div className="explore__container">
            <div className="explore__image">
              <Image
                src={exploreBeach}
                alt="explore image"
                className="explore__img"
              />
              <div className="explore__shadow"></div>
            </div>

            <div className="explore__content container grid">
              <div className="explore__data">
                <h2 className={`section__title ${montserrat.className}`}>
                  Explore The <br /> Best Paradises
                </h2>

                <p
                  className={`explore__description font-normal ${montserrat.className}`}
                >
                  Exploring paradises such as islands and valleys when traveling
                  the world is one of the greatest experiences when you travel,
                  it offers you harmony and peace and you can enjoy it with
                  great comfort.
                </p>
              </div>

              <div className="explore__user">
                <Image
                  src={explorePerfil}
                  alt="explore image"
                  className="explore__perfil"
                />
                <p className={`explore__name ${montserrat.className}`}>
                  James Bone
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ---- JOIN ---- */}
        <section className="join section">
          <div className="join__container container grid">
            <div className="join__data">
              <h2 className={`section__title ${popins.className}`}>
                Your Jorney <br /> Starts Here
              </h2>

              <p className={`mb-[2.5rem] ${montserrat.className}`}>
                Get up to date with the latest travel and information from us.
              </p>

              <form action="" className="join__form">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="join__input"
                />

                <button className="cursor-pointer button">
                  <p className={montserrat.className}>
                    Subscribe Our Newsletter
                  </p>
                  <FaArrowRight className="arrow-right-icon" />
                </button>
              </form>
            </div>

            <div className="join__image rounded-[4px]">
              <Image src={joinIsland} alt="join image" className="join__img" />
              <div className="join__shadow"></div>
            </div>
          </div>
        </section>
      </main>
      {/* ---- Footer ---- */}
      <footer className="footer">
        <div className="footer__container container grid">
          <div className="footer__content grid">
            <div>
              <a href="#" className="footer__logo">
                <Image
                  src={logoTravelnowWhite}
                  alt="logo-travelnow"
                  width={130}
                  quality={100}
                />
              </a>

              <p className={`footer__description ${montserrat.className}`}>
                Travel with us and explore <br /> the world without limits.
              </p>
            </div>

            <div className="footer__data grid">
              <div>
                <h3 className={`footer__title ${popins.className}`}>About</h3>

                <ul className="footer__links">
                  <li>
                    <a
                      href="#"
                      className={`footer__link ${montserrat.className}`}
                    >
                      About Us
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className={`footer__link ${montserrat.className}`}
                    >
                      Features
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className={`footer__link ${montserrat.className}`}
                    >
                      News & Blog
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className={`footer__title ${popins.className}`}>Company</h3>

                <ul className="footer__links">
                  <li>
                    <a
                      href="#"
                      className={`footer__link ${montserrat.className}`}
                    >
                      FAQs
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className={`footer__link ${montserrat.className}`}
                    >
                      History
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className={`footer__link ${montserrat.className}`}
                    >
                      Testimonials
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className={`footer__title ${popins.className}`}>Contact</h3>

                <ul className="footer__links">
                  <li>
                    <a
                      href="#"
                      className={`footer__link ${montserrat.className}`}
                    >
                      Call Center
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className={`footer__link ${montserrat.className}`}
                    >
                      Support Center
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className={`footer__link ${montserrat.className}`}
                    >
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className={`footer__title ${popins.className}`}>Support</h3>

                <ul className="footer__links">
                  <li>
                    <a
                      href="#"
                      className={`footer__link ${montserrat.className}`}
                    >
                      Privacy Policy
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className={`footer__link ${montserrat.className}`}
                    >
                      Terms & Services
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className={`footer__link ${montserrat.className}`}
                    >
                      Payment
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="footer__group">
            <div className="footer__social">
              <a href="#" target="_blank" className="footer__social-link">
                <svg
                  fill="white"
                  width={25}
                  xmlns="http://www.w3.org/2000/svg"
                  data-name="Layer 1"
                  viewBox="0 0 24 24"
                  id="instagram"
                >
                  <path d="M17.34,5.46h0a1.2,1.2,0,1,0,1.2,1.2A1.2,1.2,0,0,0,17.34,5.46Zm4.6,2.42a7.59,7.59,0,0,0-.46-2.43,4.94,4.94,0,0,0-1.16-1.77,4.7,4.7,0,0,0-1.77-1.15,7.3,7.3,0,0,0-2.43-.47C15.06,2,14.72,2,12,2s-3.06,0-4.12.06a7.3,7.3,0,0,0-2.43.47A4.78,4.78,0,0,0,3.68,3.68,4.7,4.7,0,0,0,2.53,5.45a7.3,7.3,0,0,0-.47,2.43C2,8.94,2,9.28,2,12s0,3.06.06,4.12a7.3,7.3,0,0,0,.47,2.43,4.7,4.7,0,0,0,1.15,1.77,4.78,4.78,0,0,0,1.77,1.15,7.3,7.3,0,0,0,2.43.47C8.94,22,9.28,22,12,22s3.06,0,4.12-.06a7.3,7.3,0,0,0,2.43-.47,4.7,4.7,0,0,0,1.77-1.15,4.85,4.85,0,0,0,1.16-1.77,7.59,7.59,0,0,0,.46-2.43c0-1.06.06-1.4.06-4.12S22,8.94,21.94,7.88ZM20.14,16a5.61,5.61,0,0,1-.34,1.86,3.06,3.06,0,0,1-.75,1.15,3.19,3.19,0,0,1-1.15.75,5.61,5.61,0,0,1-1.86.34c-1,.05-1.37.06-4,.06s-3,0-4-.06A5.73,5.73,0,0,1,6.1,19.8,3.27,3.27,0,0,1,5,19.05a3,3,0,0,1-.74-1.15A5.54,5.54,0,0,1,3.86,16c0-1-.06-1.37-.06-4s0-3,.06-4A5.54,5.54,0,0,1,4.21,6.1,3,3,0,0,1,5,5,3.14,3.14,0,0,1,6.1,4.2,5.73,5.73,0,0,1,8,3.86c1,0,1.37-.06,4-.06s3,0,4,.06a5.61,5.61,0,0,1,1.86.34A3.06,3.06,0,0,1,19.05,5,3.06,3.06,0,0,1,19.8,6.1,5.61,5.61,0,0,1,20.14,8c.05,1,.06,1.37.06,4S20.19,15,20.14,16ZM12,6.87A5.13,5.13,0,1,0,17.14,12,5.12,5.12,0,0,0,12,6.87Zm0,8.46A3.33,3.33,0,1,1,15.33,12,3.33,3.33,0,0,1,12,15.33Z"></path>
                </svg>
              </a>

              <a href="#" target="_blank" className="footer__social-link">
                <svg
                  fill="white"
                  width={25}
                  xmlns="http://www.w3.org/2000/svg"
                  data-name="Layer 1"
                  viewBox="0 0 24 24"
                  id="telegram"
                >
                  <path d="M22.26465,2.42773a2.04837,2.04837,0,0,0-2.07813-.32421L2.26562,9.33887a2.043,2.043,0,0,0,.1045,3.81836l3.625,1.26074,2.0205,6.68164A.998.998,0,0,0,8.134,21.352c.00775.012.01868.02093.02692.03259a.98844.98844,0,0,0,.21143.21576c.02307.01758.04516.03406.06982.04968a.98592.98592,0,0,0,.31073.13611l.01184.001.00671.00287a1.02183,1.02183,0,0,0,.20215.02051c.00653,0,.01233-.00312.0188-.00324a.99255.99255,0,0,0,.30109-.05231c.02258-.00769.04193-.02056.06384-.02984a.9931.9931,0,0,0,.20429-.11456,250.75993,250.75993,0,0,1,.15222-.12818L12.416,18.499l4.03027,3.12207a2.02322,2.02322,0,0,0,1.24121.42676A2.05413,2.05413,0,0,0,19.69531,20.415L22.958,4.39844A2.02966,2.02966,0,0,0,22.26465,2.42773ZM9.37012,14.73633a.99357.99357,0,0,0-.27246.50586l-.30951,1.504-.78406-2.59307,4.06525-2.11695ZM17.67188,20.04l-4.7627-3.68945a1.00134,1.00134,0,0,0-1.35352.11914l-.86541.9552.30584-1.48645,7.083-7.083a.99975.99975,0,0,0-1.16894-1.59375L6.74487,12.55432,3.02051,11.19141,20.999,3.999Z"></path>
                </svg>
              </a>

              <a href="#" target="_blank" className="footer__social-link">
                <svg
                  fill="white"
                  width={25}
                  xmlns="http://www.w3.org/2000/svg"
                  data-name="Layer 1"
                  viewBox="0 0 24 24"
                  id="youtube"
                >
                  <path d="M23,9.71a8.5,8.5,0,0,0-.91-4.13,2.92,2.92,0,0,0-1.72-1A78.36,78.36,0,0,0,12,4.27a78.45,78.45,0,0,0-8.34.3,2.87,2.87,0,0,0-1.46.74c-.9.83-1,2.25-1.1,3.45a48.29,48.29,0,0,0,0,6.48,9.55,9.55,0,0,0,.3,2,3.14,3.14,0,0,0,.71,1.36,2.86,2.86,0,0,0,1.49.78,45.18,45.18,0,0,0,6.5.33c3.5.05,6.57,0,10.2-.28a2.88,2.88,0,0,0,1.53-.78,2.49,2.49,0,0,0,.61-1,10.58,10.58,0,0,0,.52-3.4C23,13.69,23,10.31,23,9.71ZM9.74,14.85V8.66l5.92,3.11C14,12.69,11.81,13.73,9.74,14.85Z"></path>
                </svg>
              </a>
            </div>

            <span className="footer__copy">
              &#169; Copyright Ilham. All right reserved
            </span>
          </div>
        </div>
      </footer>

      {/* ---- SCROLL UP ---- */}
      <a href="#" className="scrollup" id="scroll-up">
        <FaArrowUp />
      </a>
    </>
  );
}
