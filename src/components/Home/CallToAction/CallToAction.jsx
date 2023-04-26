import React from "react";
import BizClass from "./CallToAction.module.scss";

const CallToAction = () => {
  return (
    <div className="Biz_PageStart">
      <div className={BizClass.CallTOAction_Page}>
        <div className={BizClass.Left_Part}>
          <h4>Ready To Talk ?</h4>
          <span>
            Fill out the form and let's schedule an initial call so that we{" "}
            <br /> can better understand your unique needs
          </span>
        </div>
        <div className={BizClass.Right_Part}>
          <div className={BizClass.Form}>
            <h3>We would love to hear from you</h3>
            <div className={BizClass.Content}>
              <div className={BizClass.Data}>
                <div>
                  <label htmlFor="#">First Name</label>
                  <input type="text" placeholder="First Name"  />
                </div>
                <div>
                  <label htmlFor="#">Last Name</label>
                  <input type="text" placeholder="Last Name" />
                </div>
              </div>
              <div>
                <label htmlFor="#">Email</label>
                <input type="text" />
              </div>
              <div>
                <label htmlFor="#">Phone</label>
                <input type="text" />
              </div>
              <div>
                <label htmlFor="#">Message</label>
                <textarea name="" id="" cols="20" rows="5"></textarea>
              </div>
              <button>Let's Talk</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
