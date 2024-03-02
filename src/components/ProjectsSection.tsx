import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpen } from "@fortawesome/free-solid-svg-icons";
import { CardProject, MainButton, MainTitle } from "./Contents";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Virtual, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/virtual";
import "swiper/css/autoplay";

import { projects } from "../data";
import "./project-section.css";

export default function ProjectsSection() {
  return (
    <section className="projects" id="pr">
      <MainTitle title="my projects" />

      <div className="container">
        <div className="description">
          <span>Here are some of the projects with in my experience.</span>
        </div>

        <div className="boxes">
          <Boxes />
        </div>

        <Link to="/Portfolio-Website/projects" className="show-all">
          <MainButton title="SHOW ALL">
            <FontAwesomeIcon icon={faBookOpen} />
          </MainButton>
        </Link>
      </div>
    </section>
  );
}

function Boxes() {
  return (
    <Swiper
      modules={[Navigation, Pagination, Virtual, Autoplay]}
      autoplay={{
        delay: 1500,
        disableOnInteraction: false,
      }}
      spaceBetween={10}
      slidesPerView={1}
      speed={1100}
      navigation
      fadeEffect={{ crossFade: true }}
      pagination={{
        clickable: true,
        dynamicBullets: true,
      }}
      breakpoints={{
        // when window width is >= 576px
        576: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        // when window width is >= 992px
        992: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      }}
      loop
      virtual
    >
      {projects?.map((project: any, index: number) => {
        return (
          <SwiperSlide key={project.id} virtualIndex={index}>
            <CardProject project={project} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
