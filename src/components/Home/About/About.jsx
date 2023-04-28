import React from "react";
import BizClass from "./About.module.scss";
import Sachin from "../../../images/SachinYadav(Designer).png.jpg";
import Rachit from "../../../images/Rachit.jpeg";

const About = () => {
  const OutTeam = [
    {
      img: <img src={Sachin} alt="" />,
      name: "Sachin Yadav",
      Post: "Designer",
    },
    {
      img: <img src={Rachit} alt="" />,
      name: "Rachit Yadav",
      Post: "Developer",
    },
    {
      img: <img src={Sachin} alt="" />,
      name: "Sachin Yadav",
      Post: "Designer",
    },
    {
      img: <img src={Rachit} alt="" />,
      name: "Rachit Yadav",
      Post: "Developer",
    },
  ];
  return (
    <div className={BizClass.About_Section}>
      <div className={BizClass.Top_Section}>
        <div>
          <h4>
            ABOUT <span>US</span>{" "}
          </h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />{" "}
            Suscipit iste doloremque fugit, architecto nostrum repudiandae
            voluptas possimus. Quo, iusto itaque.
          </p>
          <button>Learn More</button>
        </div>
        <div>
          <img
            src="https://i.pinimg.com/originals/50/78/a0/5078a05eb1b6847d93383eaa4c0ed500.gif"
            alt=""
          />
        </div>
      </div>
      <div className={BizClass.Container}>
        <div className={BizClass.Content}>
          <img
            src="https://www.pssolutions.org/img/banner_our_mission_.jpg"
            alt=""
          />
          <h4>Vission</h4>
          <span>
            To be innovative and sustainable business application company and
            provide an economical solution to be accessed by all size and type
            of businesses.
          </span>
        </div>
        <div className={BizClass.Content}>
          <img
            src="https://www.pssolutions.org/img/banner_our_mission_.jpg"
            alt=""
          />
          <span>
            To enable every business manager with Visionary, Diligent and
            Resilient application to manage their task from anywhere and anytime
            with ease and help to bring precision and speed in business
            decision.
          </span>
        </div>
      </div>
      <div className={BizClass.OurTeam}>
        <h4>Our Team</h4>
        <div className={BizClass.Our_Team_Container}>
          {OutTeam.map((data, indx) => {
            return (
              <>
                <div className={BizClass.Content_Card} key={indx}>
                  <div></div>
                  <div className={BizClass.Card}>
                    {data.img}
                    <div>
                      <span>{data.Post}</span>
                      <h1>{data.name}</h1>
                      <div>------------</div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default About;
