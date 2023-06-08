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
  exploreBeach,
  explorePerfil
} from "../../public/assets/img";
import Navbar from "@/component/navbar/nav";

import { Poppins, Montserrat } from 'next/font/google';

const popins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900']
})

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900']
})


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
              <h3 className={`text-[16px] mb-[1rem] ${montserrat.className}`}>
                Welcome To Travelnow
              </h3>

              <h1 className={`text-[40px] mb-[1rem] ${popins.className}`}>
                Explore <br /> The World
              </h1>

              <p className={`mb-[2rem] text-gray-300 font-normal ${montserrat.className}`}>
                Live the trips exploring the world. Discover paradises, islands,
                mountains, much more, get your trip now
              </p>

              <a href="#" className="button">
                <p className={montserrat.className}>Start Your Journey </p>
                <ArrowRightIcon width={16} className="arrow-right-icon" />
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
                <h3 className={`absolute left-[1rem] bottom-[1rem] z-10 ${montserrat.className}`}>
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
                <h3 className={`absolute left-[1rem] bottom-[1rem] z-10 ${montserrat.className}`}>
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
                <h3 className={`absolute left-[1rem] bottom-[1rem] z-10 ${montserrat.className}`}>
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
                <h3 className={`absolute left-[1rem] bottom-[1rem] z-10 ${montserrat.className}`}>
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
                Learn More <br /> About Travel
              </h2>

              <p className={`mb-[2rem] text-gray-300 font-normal ${montserrat.className}`}>
                All the trips around the world are great pleasure and happiness
                for anyone, enjoy the sights when your travel the world. Travel
                safely and without worries, get your trip and explore the
                paradises of the world.
              </p>

              <a href="#" className="button">
                <p className={montserrat.className}>Explore Travel</p>
                <ArrowRightIcon width={16} className="arrow-right-icon" />
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

              <h2 className={`popular__title ${montserrat.className}`}>Logan Mountain</h2>

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

              <h2 className={`popular__title ${montserrat.className}`}>Spike Forest</h2>

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

              <h2 className={`popular__title ${montserrat.className}`}>Garda Lake</h2>

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
              <Image src={exploreBeach} alt="explore image" className="explore__img" />
              <div className="explore__shadow"></div>
            </div>

            <div className="explore__content container grid">
              <div className="explore__data">
                <h2 className={`section__title ${montserrat.className}`}>
                   Explore The <br/> Best Paradises
                </h2>

                <p className={`explore__description font-normal ${montserrat.className}`}>
                  Exploring paradises such as islands and valleys when traveling the world is one of the greatest experiences when you travel, it offers you harmony and peace and you can enjoy it with great comfort.
                </p>
              </div>

              <div className="explore__user">
                <Image src={explorePerfil} alt="explore image" className="explore__perfil" />
                <p className={`explore__name ${montserrat.className}`}>Paul James</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
