import React from "react";
import InterestsCard from './InterestsCard.jsx';
import islandonsenImg from '../assets/images/islandonsen.png';
import trainingImg from '../assets/images/training.png';
import teaImg from '../assets/images/tea.png';

class Interests extends React.Component {
  render() {
    const InterestsList = [
      {
        image: islandonsenImg, 
        name: "Island & Onsen",
        color: "#00B050", 
        text: "I’ve visited 23 islands and 13 hot spring resorts so far, and I enjoy taking leisurely trips.",
        introduction: "My top recommended islands and hot springs are Naoshima, Fukuejima, Okunoshima, Gunkanjima, Hachijojima, Tomogashima, Shibu Onsen, Kaga Onsen, Hirugami Onsen, and Kinugawa Onsen. I hope you’ll consider visiting them!"
      },
      {
        image: trainingImg,
        name: "Strength Training",
        color: "#7030A0", 
        text: "I have been doing strength training at least three times a week to build my stamina.",
        introduction: "I follow a PPL (Push/Pull/Leg) split training routine. On Push days, I mainly do bench presses and shoulder presses; on Pull days, lat pulldowns; and on Leg days, squats. I joined the gym in June 2024."
      },
      {
        image: teaImg,
        name: "English Tea",
        color: "#FF0000", 
        text: "I hold a Professional Level tea certification and have extensive knowledge of  teas.",
        introduction: "I obtained the Professional level of the Tea Proficiency Test in February 2024, and I enjoy a variety of teas every day. My top recommendations are Kenya CTG from African Table, the 1837 Black Tea from TWG, and Nuwara Eliya. For those new to tea, I recommend Darjeeling."
      }
    ];


    return (
      <div className="Interests">
        <div className="Interests-inner">
          <h1 class="Interests-headline">
            <span class="Interests-headline-I">I</span>NTERESTS
          </h1>
          <div className="Interests-list">
            {InterestsList.map((InterestsItem) => {
              return (
                <InterestsCard
                  image={InterestsItem.image}
                  name={InterestsItem.name}
                  color={InterestsItem.color}
                  text={InterestsItem.text}
                  introduction={InterestsItem.introduction}
                />
              );
            })}
          </div>
          <p className="Interests-white">   </p>
        </div>
      </div>
    );
  }
}

export default Interests;
