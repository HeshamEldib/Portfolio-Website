import { useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpen } from "@fortawesome/free-solid-svg-icons";
import MainTitle from "./MainTitle";
import MainButton from "./MainButton";
import CardProject from "./CardProject";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Virtual } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/virtual";
import "swiper/css/autoplay";

import "./project-section.css";
import type { RootState } from "../redux/store";
import { useSelector, useDispatch } from "react-redux";
import { fetchProjects } from "../redux/slices/projectSlices";

export default function ProjectsSection() {
  const projects = useSelector(
    (state: RootState) => state.projects.projects[0]
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProjects());
  }, []);

  return (
    <section className="projects" id="pr">
      <MainTitle title="my projects" />

      <div className="container">
        <div className="description">
          <span>Here are some of the projects with in my experience.</span>
        </div>

        <div className="boxes">
          <Boxes projects={projects} />
        </div>

        <Link to="/projects" className="show-all">
          <MainButton title="SHOW ALL">
            <FontAwesomeIcon icon={faBookOpen} />
          </MainButton>
        </Link>
      </div>
    </section>
  );
}

interface BoxesProps {
  projects: any[];
}
function Boxes({ projects }: BoxesProps) {
  return (
    <Swiper
      modules={[Navigation, Pagination, Virtual]}
      spaceBetween={10}
      slidesPerView={1}
      speed={700}
      navigation
      fadeEffect={{ crossFade: true }}
      pagination={{
        clickable: true,
        dynamicBullets: true,
      }}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
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
          <SwiperSlide key={project._id} virtualIndex={index}>
            <CardProject project={project} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
