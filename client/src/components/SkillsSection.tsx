import { useEffect } from "react";
import MainTitle from "./MainTitle";
import "./skills-section.css";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { fetchSkills } from "../redux/slices/skillsSlices";
import { URL } from "../constant";

export default function SkillsSection() {
  return (
    <section className="skills" id="sk">
      <MainTitle title="my skills" />
      <div className="container">
        <Skills />

        <Note />
      </div>
    </section>
  );
}

function Skills() {
  const skills = useSelector((state: RootState) => state.skills.skills[0]);
  const dispatch = useDispatch();

  const oddSkills: any = skills?.filter(
    (e: any, index: number) => index % 2 === 0
  );
  const evenSkills: any = skills?.filter(
    (e: any, index: number) => index % 2 !== 0
  );

  useEffect(() => {
    dispatch(fetchSkills());
  }, []);

  return (
    <div className="content row justify-content-around">
      <SkillsContent skills={oddSkills} />

      <div className="line"></div>

      <SkillsContent skills={evenSkills} />
    </div>
  );
}

interface SkillsContentProps {
  skills: any[];
}
function SkillsContent({ skills }: SkillsContentProps) {
  return (
    <ul className="col-12 col-sm-5 position-relative m-0">
      {skills?.map((skill: any, index: number) => {
        return (
          <li key={skill.title + index}>
            <span>{skill.title}</span>
            <img src={URL + skill.image} alt="" />
          </li>
        );
      })}
    </ul>
  );
}

function Note() {
  return (
    <span className="note">
      NB: I'm willing to learn other skills as required.
    </span>
  );
}
