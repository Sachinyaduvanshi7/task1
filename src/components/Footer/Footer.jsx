import React from 'react'
import BizClass from "./Footer.module.scss"
import { HiOutlineLocationMarker } from "react-icons/hi";
import { GrLocation } from "react-icons/gr";
import { BiMessageRoundedDetail } from "react-icons/bi";
import { CgMail } from "react-icons/cg";
const Footer = () => {
  return (
    <div className={BizClass.Footer}>
       <div className={BizClass.Section_Five}>
              <div>
                <HiOutlineLocationMarker />
                <h5>HEAD OFFICE</h5>
                <span>
                  509, Fifth Floor, JMD Pacific <br /> squar Sector 15
                </span>
                <p>GET DIRECTION</p>
              </div>
              <div>
                <BiMessageRoundedDetail />
                <h5>LET'S TALK</h5>
                <span>Phone : +919541414155</span>
                <p>CALL US</p>
              </div>
              <div>
                <CgMail />
                <h5>E-MAIL US</h5>
                <span>marketing@3slogics.com</span>
                <p>SEND MAIL</p>
              </div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.515784319542!2d77.04688181488935!3d28.46400958248455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d185da67bfbc1%3A0x951c5f3b4b91bc1c!2s3s%20Logics%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1677839355665!5m2!1sen!2sin"
                width="340"
                height="240"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className={BizClass.CopyRight}>
              <span> Copyright © 2023 BizNext. All Rights Reserved.</span>
            </div>
    </div>
  )
}

export default Footer
