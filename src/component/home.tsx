import { ArrowRightIcon } from "@heroicons/react/24/outline";
import {
  homeBg,
  homeTrees,
  homeLake,
  homeMountain,
  homeBeach,
} from "../../public/assets/img";
import Image from "next/image";

export default function HomeSection() {
  return (
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
            <h3 className="absolute left-[1rem] bottom-[1rem] z-10">Croatia</h3>
            <div className="home__card-shadow"></div>
          </article>

          <article className="home__card">
            <Image
              src={homeLake}
              alt="home img"
              quality={100}
              className="home__card-img w-full object-cover"
            />
            <h3 className="absolute left-[1rem] bottom-[1rem] z-10">Iceland</h3>
            <div className="home__card-shadow"></div>
          </article>

          <article className="home__card">
            <Image
              src={homeMountain}
              alt="home img"
              quality={100}
              className="home__card-img w-full object-cover"
            />
            <h3 className="absolute left-[1rem] bottom-[1rem] z-10">Italy</h3>
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
  );
}
