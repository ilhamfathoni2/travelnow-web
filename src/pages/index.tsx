import Image from "next/image";
import Head from "next/head";
import { ArrowRightIcon, MapPinIcon } from "@heroicons/react/24/outline";
import {
  aboutBeach,
  homeBg,
  homeTrees,
  homeLake,
  homeMountain,
  homeBeach,
  popularMountain,
  popularForest,
  popularLake,
} from "../../public/assets/img";
import Navbar from "@/component/navbar/nav";

export default function Home() {
  return (
    <>
      <Head>
        <title>Travelnow</title>
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
              <h3 className="text-[16px] mb-[1rem] font-montserrat">
                Welcome To Travelnow
              </h3>

              <h1 className="text-[40px] mb-[1rem] font-popins">
                Explore <br /> The World
              </h1>

              <p className="mb-[2rem] text-gray-300 font-normal font-montserrat">
                Live the trips exploring the world. Discover paradises, islands,
                mountains, much more, get your trip now
              </p>

              <a href="#" className="button">
                <p>Start Your Journey </p>{" "}
                <ArrowRightIcon width={16} className="arrow-right-icon" />
              </a>
            </div>

            <div className="home__cards grid">
              <article className="home__card">
                <Image
                  src={homeTrees}
                  alt="home img"
                  quality={100}
                  className="home__card-img w-full object-cover"
                />
                <h3 className="absolute left-[1rem] bottom-[1rem] z-10">
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
                <h3 className="absolute left-[1rem] bottom-[1rem] z-10">
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
                <h3 className="absolute left-[1rem] bottom-[1rem] z-10">
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
                <h3 className="home__card-title absolute left-[1rem] bottom-[1rem] z-10">
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
              <h2 className="section__title">
                Learn More <br /> About Travel
              </h2>

              <p className="mb-[2rem] text-gray-300 font-normal font-montserrat">
                All the trips around the world are great pleasure and happiness
                for anyone, enjoy the sights when your travel the world. Travel
                safely and without worries, get your trip and explore the
                paradises of the world.
              </p>

              <a href="#" className="button">
                <p>Explore Travel</p>
                <ArrowRightIcon width={16} className="arrow-right-icon" />
              </a>
            </div>

            <div className="about__image">
              <Image
                src={aboutBeach}
                alt="about image"
                quality={100}
                className="about__img"
              />
              <div className="about__shadow"></div>
            </div>
          </div>
        </section>

        {/* ---- POPULAR ---- */}
        <section className="popular section" id="popular">
          <h2 className="section__title">
            Enjoy The Beauty <br /> Of The World
          </h2>

          <div className="popular__container container grid">
            <article className="popular__card">
              <div className="popular__image">
                <Image
                  src={popularMountain}
                  alt="popular image"
                  quality={100}
                  className="popular__img"
                />
                <div className="popular__shadow"></div>
              </div>

              <h2 className="popular__title">Logan Mountain</h2>

              <div className="popular__location">
                <MapPinIcon width={16} />
                <span>Canada</span>
              </div>
            </article>

            <article className="popular__card">
              <div className="popular__image">
                <Image
                  src={popularForest}
                  alt="popular image"
                  quality={100}
                  className="popular__img"
                />
                <div className="popular__shadow"></div>
              </div>

              <h2 className="popular__title">Spike Forest</h2>

              <div className="popular__location">
                <MapPinIcon width={16} />
                <span>Irland</span>
              </div>
            </article>

            <article className="popular__card">
              <div className="popular__image">
                <Image
                  src={popularLake}
                  alt="popular image"
                  quality={100}
                  className="popular__img"
                />
                <div className="popular__shadow"></div>
              </div>

              <h2 className="popular__title">Garda Lake</h2>

              <div className="popular__location">
                <MapPinIcon width={16} />
                <span>Italy</span>
              </div>
            </article>
          </div>
        </section>

        {/* ---- EXPLORE ---- */}
        <section className="explore section" id="explore"></section>
      </main>
    </>
  );
}
