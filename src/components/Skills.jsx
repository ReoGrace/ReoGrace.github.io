import React from "react";
import SkillsCard from './SkillsCard.jsx';
import medicalstudentImg from '../assets/images/medicalstudent.png';
import aiengineerImg from '../assets/images/aiengineer.png';

class Skills extends React.Component {
  render() {
    const SkillsList = [
      {
        image: medicalstudentImg, 
        name: "Medical Student",
        color: "#ED7D31", 
        text: "I’m studying medicine at the University of Yamanashi, and interested in community healthcare, and preventive medicine.",
        introduction: "I enrolled in Yamanashi University School of Medicine in 2020 and have a particular interest in gastroenterology, general medicine, community healthcare, and preventive medicine. I aspire to become a physician with exceptional skills who can truly empathize with patients."
      },
      {
        image: aiengineerImg,
        name: "AI / ML Engineer",
        color: "#0070C0", 
        text: "I can build AI and machine learning models in Python to analyze and predict various types of data, not just in healthcare.",
        introduction: "I am proficient not only in AI and machine learning model development with Python but also in application development using JavaScript. Having completed the public lecture series at the University of Tokyo’s Graduate School of Engineering, I plan to rapidly integrate cutting-edge AI technologies into the medical field."
      }
    ];


    return (
      <div className="Skills">
        <div className="Skills-inner">
          <h1 class="Skills-headline">
            <span class="Skills-headline-S">S</span>KILLS
          </h1>
          <div className="Skills-list">
            {SkillsList.map((SkillsItem) => {
              return (
                <SkillsCard
                  image={SkillsItem.image}
                  name={SkillsItem.name}
                  color={SkillsItem.color}
                  text={SkillsItem.text}
                  introduction={SkillsItem.introduction}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Skills;
