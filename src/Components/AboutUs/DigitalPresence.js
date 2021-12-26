import React from "react";
import DigitalList from "./DigitalList";
import JoinTeam from "./JoinTeam";

function DigitalPresence() {
  const digital = [
    {
      id: "1",
      img: "../img/aboutus1.svg",
      title: "Our vision and mission",
      descriptions:
        "Keep everyone focused and engaged with high quality, real-time audio and video, and a suite of collaborative tools.",
    },
    {
      id: "2",
      img: "../img/aboutus2.svg",
      title: "Open source is in our DNA",
      descriptions:
        "Increase social learning and knowledge sharing with our powerful communication platform. ",
    },
    {
      id: "3",
      img: "../img/aboutus3.svg",
      title: "Real support 24/7/365",
      descriptions:
        "Our award-winning in-house support staff is available to you all day, every day, via email, and social media.",
    },
    {
      id: "4",
      img: "../img/aboutus4.svg",
      title: "Our happy student",
      descriptions:
        " Every student is different, so we offer not just numerical, verbal and behavioral assessment tools, but skill-based assessment tools as well. ",
    },
    {
      id: "5",
      img: "../img/aboutus5.svg",
      title: "A Global Curricula",
      descriptions:
        "A truly global platform, Education supports national and international curricula, such as IB, IGCSE and AP.",
    },
    {
      id: "6",
      img: "../img/aboutus6.svg",
      title: "Quizzes & Online Exams",
      descriptions:
        "Education provides everything you need to create high-quality quizzes and easy analysis tools for quiz scoring.",
    },
  ];
  return (
    <div>
      <section className="header-img"></section>
      <section className="section-steps">
        <div className="section-about-header">
          <h2 className="text-center">
            We help people meet the new Education.
          </h2>
          <p className="text-center">
            Education joins all your - <em>learning needs </em>-into one
            advanced platform giving your students, teachers and parents the
            right tools for a simpler and more connected learning experience.
          </p>
          <p className="text-center">
            Learning trends change constantly and you need a system that can
            help you stay up-to-date with the latest global trends. Education’s
            platform is dynamic and constantly innovating helping you create
            ways to bridge the gap between getting left behind or staying on
            trend
          </p>
        </div>
        <div className="digital-container">
          {digital.map((items, index) => {
            return (
              <DigitalList
                key={index}
                img={items.img}
                title={items.title}
                descriptions={items.descriptions}
              />
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default DigitalPresence;
