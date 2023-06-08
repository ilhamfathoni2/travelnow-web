import Image from "next/image";
import Head from "next/head";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { homeBg, homeTrees, homeLake, homeMountain, homeBeach } from "../../public/assets/img";
import Navbar from "@/component/navbar/nav";
import HomeSection from "@/component/home/home";

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
        <HomeSection />
        {/* ---- MAIN Home ---- */}
        {/* <section className="home section" id="home">
          <Image src={homeBg} alt="background image" quality={100} className="home__bg" />
          <div className="home__shadow"></div>

          <div className="home__container container grid">
            <div className="text-center">
              <h3 className="text-[16px] mb-[1rem] font-montserrat">Welcome To Travelnow</h3>

              <h1 className="text-[40px] mb-[1rem] font-popins">
                Explore <br /> The World
              </h1>

              <p className="mb-[2rem] text-gray-300 font-normal font-montserrat">
                Live the trips exploring the world. Discover paradises, islands,
                mountains, much more, get your trip now
              </p>

              <a href="#" className="button">
                <p>Start Your Journey </p> <ArrowRightIcon width={16} className="arrow-right-icon" />
              </a>
            </div>

            <div className="home__cards grid">
              <article className="home__card">
                <Image
                  src={homeTrees}
                  alt="home img"
                  width={100}
                  quality={100}
                  className="home__card-img w-full object-cover"
                />
                <h3 className="absolute left-[1rem] bottom-[1rem] z-[1]">Croatia</h3>
                <div className="home__card-shadow"></div>
              </article>

              <article className="home__card">
                <Image
                  src={homeLake}
                  alt="home img"
                  width={100}
                  quality={100}
                  className="home__card-img w-full object-cover"
                />
                <h3 className="absolute left-[1rem] bottom-[1rem] z-[1]">Iceland</h3>
                <div className="home__card-shadow"></div>
              </article>

              <article className="home__card">
                <Image
                  src={homeMountain}
                  alt="home img"
                  quality={100}
                  className="home__card-img w-full object-cover"
                />
                <h3 className="absolute left-[1rem] bottom-[1rem] z-[1]">Italy</h3>
                <div className="home__card-shadow"></div>
              </article>

              <article className="home__card">
                <Image
                  src={homeBeach}
                  alt="home img"
                  quality={100}
                  className="home__card-img w-full object-cover"
                />
                <h3 className="home__card-title absolute left-[1rem] bottom-[1rem] z-[1]">Spain</h3>
                <div className="home__card-shadow"></div>
              </article>
            </div>
          </div>
        </section> */}

        {/* ---- ABOUT ---- */}
        <section className="about section" id="about"></section>

        {/* ---- POPULAR ---- */}
        <section className="popular section" id="popular"></section>

        {/* ---- EXPLORE ---- */}
        <section className="explore section" id="explore"></section>
      </main>

      {/* <div className="relative h-screen">
        <div className="absolute inset-0">
          <Image src={homeBg} alt="background image" fill />
        </div>

        <div className="relative z-10 flex flex-col justify-center h-full">
          <div className="px-[150px]">
            <h4 className="lg:text-[25px] mt-10 font-medium text-gray-200">
              Welcome To Travelnow
            </h4>

            <h1 className="mt-3 lg:text-[85px] font-semibold text-white leading-[100px]">
              Explore <br /> The World
            </h1>

            <p className="mt-3 text-white lg:w-[460px]">
              Live the trips exploring the world. Discover paradises, islands,
              mountains, much more, get your trip now
            </p>

            <button className="mt-5 glass-effect  rounded-[3px] py-3 px-5 w-fit text-white">
              <div className="flex justify-between gap-3">
                <p>Start Your Journey</p> <ArrowRightIcon className="w-4" />{" "}
              </div>
            </button>
          </div>
        </div>
      </div> */}
    </>
  );
}
