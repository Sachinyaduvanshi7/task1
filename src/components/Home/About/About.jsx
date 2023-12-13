import React from "react";
import BizClass from "./About.module.scss";
import Sachin from "../../../images/SachinYadav(Designer).png.jpg";
import Rachit from "../../../images/Rachit.jpeg";
import OurPresence from "../OurPresence/OurPresence";
import Footer from "../../Footer/Footer";

const About = () => {
  const OutTeam = [
    {
      img: <img src={Sachin} alt="" />,
      name: "Sachin Yadav",
      Post: "Head Of Designers",
    },
    {
      img: <img src={Rachit} alt="" />,
      name: "Rachit Yadav",
      Post: "Project Manager",
    },
    {
      img: <img width="200" title="Ramniwas Yadav" src="https://media.licdn.com/dms/image/C5603AQETBZAbCVXaSw/profile-displayphoto-shrink_400_400/0/1517729352883?e=1688601600&amp;v=beta&amp;t=r2V18P-IPvmeLIQhXsQ8r9uMlfjnfp53G8j5JiucGvM" height="200" alt="Ramniwas Yadav" id="ember1728" class="pv-top-card-profile-picture__image pv-top-card-profile-picture__image--show evi-image ember-view"/>,
      name: "Ramniwash Yadav",
      Post: "Director",
    },
    {
      img: <img width="200" title="Rajath Jaiin, #HIRING" src="https://media.licdn.com/dms/image/D5635AQHvbHOjSuHiqA/profile-framedphoto-shrink_400_400/0/1682494458642?e=1683982800&amp;v=beta&amp;t=EH7HcMVaAPnXLYiVHubNtfE5xRy7DQS2CLtQ3f1gat0" height="200" alt="Rajath Jaiin, #HIRING" id="ember1728" class="pv-top-card-profile-picture__image pv-top-card-profile-picture__image--show evi-image ember-view"/>,
      name: "Rajat Jain",
      Post: "Assistant Manager ",
    },
  ];

  const OurJourney = [
    {
      img: (
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBPCRvV5TzBYWlPwznwl9QzGShbyOswqQQVQ&usqp=CAU" alt=""
        />
      ),
      head: "Started The Company (2016)",
      content: (
        <span>
          {" "}
          Development Phase <br /> 3 Employees <br /> 1 Office
        </span>
      ),
    },
    {
      img: (
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT13XSmYZl_zp6S4SwctsuXuC8XciBbNrAWcg&usqp=CAU" alt=""
        />
      ),
      head: "2nd Year (2017)",
      content: (
        <span>
          {" "}
          Development Phase <br /> 5 Employees <br /> 1 Office <br />First Order
        </span>
      ),
    },
    {
      img: (
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1W9e0V_9Y3LbgbagXzSmO5o6nJ812R-u-2A&usqp=CAU" alt=""
        />
      ),
      head: "3rd Year (2018)",
      content: (
        <span>
          {" "}
          2 Channel Partners <br /> 10 Employees <br /> 2 Office <br />2 Order
        </span>
      ),
    },
    {
      img: (
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMpojXjQAktfw8pAie5Nv_5RAQPYAnwLWf8g&usqp=CAU" alt=""
        />
      ),
      head: "4th Year (2019)",
      content: (
        <span>
          {" "}
          2 Channel Partners <br /> 12 Employees <br /> 2 Office <br />2 New Order
        </span>
      ),
    },
    {
      img: (
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1W9e0V_9Y3LbgbagXzSmO5o6nJ812R-u-2A&usqp=CAU" alt=""
        />
      ),
      head: "5th Year (2020)",
      content: (
        <span>
          {" "}
         ----- Channel Partners  <br /> ---- Employees <br /> --- Office <br />---- Order
        </span>
      ),
    },
    {
      img: (
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1W9e0V_9Y3LbgbagXzSmO5o6nJ812R-u-2A&usqp=CAU" alt=""
        />
      ),
      head: "6th Year (2021)",
      content: (
        <span>
          {" "}
          ---- Channel Partners <br /> ---- Employees <br /> ---- Office <br />---- Order
        </span>
      ),
    },
    {
      img: (
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1W9e0V_9Y3LbgbagXzSmO5o6nJ812R-u-2A&usqp=CAU" alt=""
        />
      ),
      head: "7th Year (2022)",
      content: (
        <span>
          {" "}
          ---- Channel Partners <br /> ---- Employees <br /> ---- Office <br />---- Order
        </span>
      ),
    },
    {
      img: (
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1W9e0V_9Y3LbgbagXzSmO5o6nJ812R-u-2A&usqp=CAU" alt=""
        />
      ),
      head: "8th Year (2023)",
      content: (
        <span>
          {" "}
          ---- Channel Partners <br /> ---- Employees <br /> ---- Office <br />---- Order
        </span>
      ),
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
      <div className={BizClass.Misson_Container}>
        <div className={BizClass.Content}>
          <img
            src="https://www.pssolutions.org/img/banner_our_mission_.jpg"
            alt=""
          />
          <h4>VISSION</h4>
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
        <h4>OUR TEAM</h4>
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
      <div className={BizClass.Our_Journey}>
        <div className={BizClass.Container}>
          <div>
            {" "}
            <span>We BELIEVE IN BUSINESS GROWTH</span>
            <h4>OUR JOURNEY</h4>
          </div>
          <div className={BizClass.Content_Section}>
            {OurJourney.map((data, indx) => {
              return (
                <>
                  <div className={BizClass.Card} key={indx}>
                    {data.img}
                    <div>
                      <h3>{data.head}</h3>
                      {data.content}
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
      <div className={BizClass.Our_Philosophy}>
        <img
          src="	https://mybiznext.in/images/our_about.png
"
          alt=""
        />
      </div>
      <div className={BizClass.Methology}>
        <span>WE BELIEVE IN RELATION</span>
        <h4>IMPLEMENTATION METHOLOGY</h4>
        <img
          src="https://mybiznext.in/images/about_us.png
"
          alt=""
        />
      </div>
     
      <OurPresence />
      <Footer />
    </div>
  );
};

export default About;
