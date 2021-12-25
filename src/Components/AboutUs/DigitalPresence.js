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
        "We believe in a world where people have the freedom to choose how their digital content is shared, and we foster their success by providing an open web platform of choice.",
    },
    {
      id: "2",
      img: "../img/aboutus2.svg",
      title: "Open source is in our DNA",
      descriptions:
        "We support WordPress, a powerful open source content management system for the web. We help to make WordPress better with code, community contributions, and expert-level support.",
    },
    {
      id: "3",
      img: "../img/aboutus3.svg",
      title: "Real support 24/7/365",
      descriptions:
        "Our award-winning in-house support staff is available to you all day, every day, via live chat, email, and social media.",
    },
    {
      id: "4",
      img: "../img/aboutus4.svg",
      title: "Over 400k+ happy customers",
      descriptions:
        " Since the dorm room back in 1997, our customer count has grown to over 400,000, spanning throughout more than 100 countries. That's nuts, right?Since the dorm room back in 1997, our customer count has grown to over 400,000, spanning throughout more than 100 countries. That's nuts, right?",
    },
    {
      id: "5",
      img: "../img/aboutus5.svg",
      title: "1.5 million + websites",
      descriptions:
        "DreamHost proudly hosts over 1.5 million websites, WordPress blogs, and applications for designers, developers, small businesses, and more.",
    },
    {
      id: "6",
      img: "../img/aboutus6.svg",
      title: "750k+ WordPress installations",
      descriptions:
        "We’ve been hosting WordPress websites and blogs since the beginning. Our friendly in-house WordPress experts are here to help you do amazing things!",
    },
  ];
  return (
    <div>
      <section className="header-img"></section>
      <section className="section-steps">
        <div className="section-about-header">
          <h2 className="text-center">
            We help people own their digital presence.
          </h2>
          <p className="text-center">
            It's not just wishful thinking. It's our <em>noble cause</em> — an
            idea that drives everything we do.
          </p>
          <p className="text-center">
            When you put your dreams online—your words, your photos, your
            creations—you shouldn't have to worry about your service provider
            mining that data for marketing purposes. Those are your dreams — not
            ours! DreamHost's open platform gives you the power to share your
            data and the freedom to control how it's used.
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
