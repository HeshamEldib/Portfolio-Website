import HomeSection from "../components/HomeSection";
import AboutSection from "../components/AboutSection";
import SkillsSection from "../components/SkillsSection";
import ProjectsSection from "../components/ProjectsSection";
import ContactSection from "../components/ContactSection";

function Home() {
  return (
    <>
      <HomeSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </>
  );
}

export function Footer() {
  return (
    <footer>
      <span>
        © All rights reserved
        <br />
        Hesham Eldib - 2022
      </span>
    </footer>
  );
}

export default Home;
