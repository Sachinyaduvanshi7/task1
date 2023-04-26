import React, { useState } from "react";
import BizClass from "./Biz_Home.module.scss";
import Header from "../Header/TopHeader/Header";
import { ImScissors } from "react-icons/im";
import { FaUsers, FaPencilRuler } from "react-icons/fa";
import { RiDatabase2Fill } from "react-icons/ri";
import { AiOutlineFilePdf } from "react-icons/ai";
import OurPresence from "./OurPresence/OurPresence";
import Footer from "../Footer/Footer";
import { MdOutlineLaptopChromebook } from "react-icons/md";

const Home = () => {
  const [moreCustomer, setMoreCustomer] = useState(false);
  const OpenMoreCustomer = () => {
    setMoreCustomer(!moreCustomer);
  };
  const SectionTwoCard = [
    {
      img: <img src="https://mybiznext.in/images/solutions/order.svg" alt="" />,
      date: "February 24, 2023",
      head: "Order Management and Workflow",
      p: "Plan, Manage and Execute Purchase and Sale Order with simplified and powerful Integrated  Order Management application and automate communication between all stakeholders. Workflow will ensure internal control maintained.",
    },
    {
      img: (
        <img src="	https://mybiznext.in/images/solutions/payment.svg" alt="" />
      ),
      date: "February 24, 2023",
      head: "    Account Receivable and Payable",
      p: "Define credit Policies and BizNext will  ensure those are followed on every arrival and Dispatch.  Setup notification, automate collection and manage all payment delays and disputes with    integrated system with approval system.",
    },
    {
      img: <img src="	https://mybiznext.in/images/solutions/sale.png" alt="" />,
      date: "February 24, 2023",
      head: "   Sale and Distribution",
      p: "Quote, Revise, convert to Sale Order,    define payment terms, approve and get fulfilled with integrated application.   BixNext connect fulfillment with Production or procurement and show real time status of sale   team.",
    },
    {
      img: (
        <img src="		https://mybiznext.in/images/solutions/ecommerce.svg" alt="" />
      ),
      date: "February 24, 2023",
      head: "Ecommerce Portal",
      p: "Biznext E-commerce Portal help to start     online store with-in few steps and connect with fulfillment and dispatch dept.     It increase visibility of product and service ,engage more customer and grow business.It can be integrated with any exisitng application .",
    },
    {
      img: (
        <img
          src="		https://mybiznext.in/images/produce-2.svg
          "
          alt=""
        />
      ),
      date: "February 24, 2023",
      head: "Production and Material Planning",
      p: "BizNext Production and MRP module is  comprehensive system which covers production plan, capacity and raw material planning. It   automate from planning to material in   to Quality test. BizNext Process Ladder help to plan and excute orders.",
    },
    {
      img: (
        <img src="		https://mybiznext.in/images/solutions/finance.svg" alt="" />
      ),
      date: "February 24, 2023",
      head: " Financial Accounting",
      p: "Get hold of financial health of an  organisation with Biznext.   It allows to budget, plan, monitor and forecast fund flow. System ensure all complianes are met,  provide data points to management for quick and right decisions.",
    },
  ];

  const ChhoseBizNext = [
    {
      head: "BUILD AS REQUIRED",
      logo: <ImScissors />,
      p: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam ea qui perferendis consectetur eveniet quibusdam odio!",
    },
    {
      head: "INTEGRATION READY",
      logo: <AiOutlineFilePdf />,
      p: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam ea qui perferendis consectetur eveniet quibusdam odio!",
    },
    {
      head: " INBUILT BUSINESS ANALYTICS",
      logo: <RiDatabase2Fill />,
      p: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam ea qui perferendis consectetur eveniet quibusdam odio!",
    },
    {
      head: " CONTINUOUS INNOVATION",
      logo: <FaPencilRuler />,
      p: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam ea qui perferendis consectetur eveniet quibusdam odio!",
    },
    {
      head: " EXPERIENCED TEAM",
      logo: <FaUsers />,
      p: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam ea qui perferendis consectetur eveniet quibusdam odio!",
    },
    {
      head: "  SCALABLE WITH GROWTH",
      logo: <MdOutlineLaptopChromebook />,
      p: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam ea qui perferendis consectetur eveniet quibusdam odio!",
    },
  ];

  return (
    <>
      {" "}
      <div className={BizClass.PageStart}>
        <div className={BizClass.HomePage}>
          {/* <Header /> */}
          <div className={BizClass.Page_Section}>
            <div className={BizClass.Section_One}>
              <div className={BizClass.Left_Part}>
                <p>Deep Functionality</p>
                <h2>Our Digital Document Processing Technologies</h2>
                <h4>
                  Our libraries - built around our core technologies - help
                  developers add deep functionality document processing to web,
                  mobile, cloud and desktop applications.
                </h4>
                <p>
                  Digital transformation changed every process in today's
                  business world. The number of e-commerce transactions
                  skyrocket and supply chains are fully connected. In nearly any
                  business process, documents and reports need to be designed,
                  created, shared and archived. Our technologies help companies
                  to integrate document processing to client, web and cloud
                  solutions to gain the largest competitive advantage.
                </p>
                <button>Launch Demo</button>
              </div>
              <div className={BizClass.Right_Part}>
                <embed src="https://s1-www.textcontrol.com/application-1.6100.10250/img/technologies/anim-pdf-generation.svg" />
              </div>
            </div>
            <div className={BizClass.Section_Two}>
              <h4>OUR SOLUTION</h4>
              <div className={BizClass.Card_Container}>
                {SectionTwoCard.map((data, indx) => {
                  return (
                    <>
                      <div className={BizClass.Card}>
                        {data.img}
                        <div className={BizClass.Content}>
                          <h3>{data.head}</h3>
                          <p>{data.p}</p>
                        </div>
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
            <div className={BizClass.Section_Three}>
              <h4>Why Choose BizNext ?</h4>
              <div className={BizClass.Container_Data}>
                <div className={BizClass.Part_One}>
                  <div>
                    {ChhoseBizNext.map((data, ind) => {
                      return (
                        <>
                          <div className={BizClass.Card} key={ind}>
                            <span>
                              <h3>{data.head} </h3> {data.logo}
                            </span>
                            <p>{data.p}</p>
                          </div>
                        </>
                      );
                    })}
                  </div>
                </div>
                <div className={BizClass.Part_Two}>
                  <embed src="https://s1-www.textcontrol.com/application-1.6100.10250/img/technologies/anim-pdf-generation.svg" />
                </div>
              </div>
            </div>
            <div className={BizClass.Section_Four}>
              <div className={BizClass.DataContainer}>
                <div className={BizClass.Content}>
                  <h4>
                    BRANDS THAT TRUST <br />{" "}
                    <span>
                      {" "}
                      <p>BIZ</p> NEXT
                    </span>
                  </h4>
                  <h3>Selected Happy Customers</h3>
                  {moreCustomer ? (
                    ""
                  ) : (
                    <button onClick={OpenMoreCustomer}>MORE CUTOMERS</button>
                  )}
                </div>
                <div className={BizClass.Our_Clients}>
                  <div>
                    <img
                      src="https://conteudo.burh.com.br/wp-content/uploads/2020/08/LOGO-TOYOTA-BOSHOKU_VERTICAL-scaled.jpg"
                      alt=""
                    />
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjfRvbyeS1RGBm0eN-wQr34cY2BgStiTHvFULDSRd_GtpnU3-7AoO7B7b4oxUxOll4g0c&usqp=CAU"
                      alt=""
                    />

                    <img
                      src="https://www.nirmalind.com/img/logo-large.png"
                      alt=""
                    />

                    <img
                      src="https://www.generalatlantic.com/wp-content/uploads/2022/07/asg-eye-hospitals.png"
                      alt=""
                    />
                    <img
                      src="	https://acacioustech.com/new_aps/img/b5.png"
                      alt=""
                    />
                    <img
                      src="https://products.rosenberger.com/media/image/Rosenberger_Logo_red_RGB_1000px.png"
                      alt=""
                    />
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Logo_SMC_Corporation.svg/1200px-Logo_SMC_Corporation.svg.png"
                      alt=""
                    />
                    <img src="http://atekworld.com/imgs/logo.png" alt="" />
                  </div>
                </div>
              </div>
              {moreCustomer ? (
                <div className={BizClass.MoreCustomer}>
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDkSvroFTtdxHJTNz_nl6znpEHntgLgUI_Xc2Ggr8HUqxmC6S9-X4rvvaOQdJFnxPvLXk&usqp=CAU"
                    alt=""
                  />
                  <img
                    src="https://images.hindustantimes.com/img/2021/06/30/1600x900/c3ac2bfa-d9d4-11eb-a5ce-a68058c7c394_1625079441804.png"
                    alt=""
                  />
                  <img
                    src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/uerpyg28dnkj59txneel"
                    alt=""
                  />
                  <img
                    src="data:image/jpeg;base64,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"
                    alt=""
                  />
                  <img
                    src="https://www.kundangroup.com/wp-content/themes/kundangroup/images/logo.png"
                    alt=""
                  />
                  <img
                    src="https://acacioustech.com/new_aps/img/b4.png"
                    alt=""
                  />

                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAkFBMVEX///8AAAD9/Pzy8fH39vbt7Ozv7u76+fno5+fi4eHV1NT08/PZ2NhfXV3l5OTd3NyRj4/Lycm9u7stKyubmZl+fHywrq6sqqrEwsJGRERBPz/Pzc1WVFRraWm5t7dNS0s5NzeHhYVoZmajoaF0cnIuLCwfHR2PjY2EgoIZFxdcWlolIyNRT08RDw95d3caGBgt2dV2AAAQKElEQVR4nO1d6XqqOhQlDIoMIgIiIIiiOGLf/+1uBkgCamvPkSucj/WnLaLdi+zsKTtREAYMGDBgwIABAwYMGDBgwIABAwYMGDDgw9CtT0vQNibXT0vQNsR0/mkR2ob/zw+iUUSfFqFthNtPS9A2FuBfN6cWOHxahLZh5vLrN4+z9gRpDT5YvH7zro8DroKr+Oq9fiq1KUpb2AL7xTujImlVkrawAMfXbrScnnoWFRTqK/fJazBpW5aWEIOXLOQO+G1L0hYyEL7gMA7AbF+UljAtXrA1C1D0OPg5g/inWyLwmip3FBm4TL+/wzqB8/8jSzuYXIDbuKTWzOs0BJe+2lGCAIS1uCY6F8WKJY7SFfwmtOsiXACW3J/zAkB8VRTFGPw8UTsODQAuXJEuAMMsx3UDQD/jUQ5yCgCzNRooQebiDNRHuJ/wALI11gz/EdUYQg0Gs48K9xbYUBGhTpo4LlNLgidFQOkjAKtf5MhdxcTBmjgnsfWNMEQjhwheehzMMEBz6cH5GGK/rq8RwR0c1AT90s+ksAmXTLuspJN5R/TLAhHcQOafFe4tMAC2NaMTH18vCjIJ7X/A0gj6HoBARr5vNa6uZYjgRRWk9NUyR6cBJyKAQYxaAHNErsywuZnDl3afFe0vIS9dG8UuiM+O/AztsSBaJibo9r4qru3RVFOIE3R0+BNdCLZXHJoi+zrJUUCnu6aZ9dHg6A4mspYF6URUEppTBjQnY6S8Vohv+yGL7CL8kooviMgH4vB7RQmGKtLRvSKI53os3iN4JZeYTESc6ltFeRElvaML0tQqjuthOXFWSr4rtROvedvk2hcyMGVIXjHsn82pEiWtDNBIlrhEvzqIzaRAGixIeRmLv1Q67hY2lckktHKS6Wox2GEySItR/eJAGPZx5Unwg1OaIQOCx5CmusTrq06ZYoh4wt7Gzz6l05BVPG4i8fD1oiiekQFKEwVj5vbPzPAoQ5iqqigZmBZRziDpo6snEHVRHOuKuthWxhIn+eOZAy4bqJIlbbD2jNGnZf0JymSk6+OGwx576zBMnZwFMSYarXGMf9+K1Jkg57jLDP0jor+ILIV231l7me8nmlwx1ZVkNtuFlYs/+/gF6BnXxxUaz2kBeOSxv7A6G9aIapR5AZHUSa/xJllWUeZYUSeRHVkK+VNKUZwq3FBUauzqHCHS1TGxO1s+FacTd3Vhmhec/UirzzA9StDoRREMWRFldeKb5zRv0DyFaw8+k44SHRvJNuCGJj97c4tOMewgEgG/zmI03Yrmm525CsITT/RrFc/m1rST89NIDikvq+O5U+zPLfOMwtNFNp8njySXtGWS+LPbOXSoMhTb29HV1M6NqGgtdheeZZhhSgpOJwRZ1783KuJYsaJlssiyo3kNHSftZEwnG5s1P5I4bIE+YrPMchBXQZqqLREiQxXFJ6zFsSx3NaYbWzOW8+KQRib5bohNkO2u9uwRXK79XKMZR3HJgCwT6i6MuM8oudAo+ctql821qHNz7SfoWmLgoHNJZmQVeI80A/2YlCa3MO0eZoYINiowXTEZnB6CRl/7ovQnvW13175IlIKDGxTvpA3/QGg3efcI1ezD9gVF2eX6xDx2SURH1krLdn5Z7aqxfAq1isU26K8N1EYcmeLUgijmGJdJcfFGiS/AOfYsUVQrf49d9bq0M8qVzD3ciXGsGI5IBHTuGcVKS5GPk04gQFo4CqsIB5HRKi2tKuE9a/2aEF+OYjRU/UajJjPvjyclGtBcFcSKd9/6E40blB/bGXGN7Y1oUoIgR9YGl/1tQSwzS7D6rMB/gOmE5L0JWMGIU9wRHmlYDaJ+IYNcaents+L+OeTUQUyPZAYu9bEBBzNHgemMTMRJaZW0T0v6p3BxDy0pPG2IvdyQavcUXYIzVEM5yL63vn90QTYSz7kv2lvigTMyrsfSgorzJOnh+mEJF5lTHMDskUEdTVEKMb7ixTQDRt/hZ8X7e4ho/XqCglS0yqsjc3ODHLUC+5EYW9P+A3t6VBAuPSIqKM5S9IoG/onWPewIY1SiWLBARyrw2G1h/tuzaO0BkD3xcA2mCuXQsOH5iSdob41oBdTWVu5+qqIaZD8VEsJs+98FjRrYqu1dVfSCcwuyZAgHsVA+JdtbgHJ9WuyUAhaOV9iBu+0KvcJ0XzOWEzgTU7dWFzUACDq75vQz0G6KujcwomY9f9drl7h7ocdi0mdb45Z1mu9xAKe+Nir44KVNsmretwJGheg1gmio017aGuUCXmwAHqe9jGukFd5z8BIWvatCIdzAL/afB0X/ShjZr1pio1dsbreQgOuvViI80LPg1DgFv1vvnPQsOJWD9LdD4l462VfyDLHz65ZmMezTqQpZ/geWMVr3Zwkxyv/ojK+kP8v5cR8DlF+hZ3a/RTyICOa96al5JZxZ3Cvzsut+X8/c2exwuJnrF2Kw+X0+Yeeg4y3fI9qO+HNZYlncHTVgw7d3nKGUvszQPt3VuiP0fDq+xqZThj+le3ZxV803cGtDx7d3yVVXBQi+v1HD/c41hta+DyvdtKvih2VPg7Ql8gyne67e32FQhul3MaZVGiTuPAW10u/uNNFK6qNkh3Y977/x3FXrBXe00IhO4G6cImG4qzQHTmj6Tct3rQS9PPfclCDLeUd07J8dqCRb9nK+/J/21Gh8a9Oxng/Qtq78aZ6gOvTdVb1fZwQfloat7FqOcRBrrZNUPFBDXstbKcOvZ35tGrL3luVi6cp93j3D5RbwMFu2tkYImuA3f9LhfXaGnsq/nywjlt37VHPFscxtxpjsmv/vq9WTwezmHiX8VJnNYY/7EUNRUNe1Ny4TP8tqBEF4DtL0RH3GvLYtpUSLFKMH/w7wAQxjaNTed7zF5vkahM7jD7hD5SkXD19t75hw6/TwH3LrL2yS8gxnT972HKXPmD95ua02Tel+DjYkeshQPT9921MQ8zV5NCcwWloz3jyXKJSeMkwezaSfQCxq/PT1dtaMa5Nwv1ql/A7QrMmwtOny8Q/4lbEAPbwOxH6yXMy4LVL7Vrwia9IGWxt6iLHqM99fnkzO+BCGBufLf82w8hPVIdES54rbCF+X7ONp74Ho02tEik2dof90IjEUp/ySMhubp0F8O+IG/0pHmHNgatvGqjgbL35hN6kuEvPGrCZkqN94Js7KNM0tBNt5mS4Nw5pMVUVmRvNA44fq6XFfkmHRt754hvZvYNHhyGtBdUX8giVzOYZRzfRyYQEVc00vsSnHmm8q38r7dzpTWvAX2QMZEKjyJvW7ltkXT3DHQjuRMmSFAGbF6AzQKyXlY/hNdZvz/o5NZmfqkW91HikxDvw5UDx4pWIMWSHgAUPZzTLX2213fB5qV7cVb68cPxKLoLbhhVmepwQFkZqVlF5jWvp9oZXd98bKsaXB3HPB3ADZ9jE6bODz3ZqrVRXJ7ZEeUsNTQ311l2NIvdqPDEd2MothZEvve2MO1RR30RCpwglp0/LuMgDN8+QZw/1rDFUtDu7Ol3hj3Nb8aOJrreZlUsu17y/fVV5EGpswhsZThuLy/vQMhDcu4DU/2njGEKU090N775y/Z9hwdNH2wSc+em7vY1iQLsLJ/f+0HxMHX0b9AxlDhzJk76sbped51xuz4JcZIr1R7y8Dsv+HE5tWDn9iOL6rYDC8sa2h+dEaZXi6pOvtNt7djpuZ6+OjPBQ6ZzIuW67r6SOG7IHxLeCH5wTfyTDN9+sgWFPRyRQfa4alju4K24yhxSlYXtPTlxnWDXMabI8zd9MCw1IKKta3LpkxNESuRliLIh8xZCcqeQ/ug7jZcp31+5tvqMZ8u+bCGGrl+hIBr6ePGKoPGPJVKOr9aK3u/fU2pjLfeSKFstJqIVzB9XE/YsjexxhyZoYGRSx+bWF9gwZMQW1Jph7jj3iGXG2RXzFlDHM6j0c0EWEMudIqLb4yzW+hZYeNCL8hObtc1sHKjL1jVJcUMRxx5VE2b0SWN9LHI9HskzLkp2FlqTjj2kIZQ2eFoG21KCFxdSbtniFf7+QWMlj4TMdQp6mLh05YkvTabeWBRNKGXWmlnsjlDflBlWRplHGPmeTFIzoWxG1ytSOmpyzVtBQIlOHKdLQvQZimDgoSeHcfuPZ8UztdazlSVMt4byecyIeIhRPu+Qp4ID9kqHOVDKqnTPQC4SLyDAnQ97Y8y6bpW8HbyzXK/un/+yptQZOhELHEwKkeeCNNxhZ1Vb+GKjijhzlFHe9uDte+nv2nyjvRmgbNULmRqGp0jRRrz2+fLYHra5u7f3NpViffXnJbPqnQs/2FVNsqhiK3alH6MLk2oUimL9Wv4SBIvlsnSZpLIO8vKtoPFZVV3/Q7hsKUPRWnLK7UZ1hKPrl2jZgltU4bKsGtfqG+VfM9UB5kpFx5kQ0Pq6NwClh6Up1f1i4Z1lfSyhuVc+NicwGzBYZQ4MaDdXjfO6aKxVWKOJdRRiISvxRcMhQMVlU/VQ9NXNAPdJAtHjUYtnMaiuxyvvh0rDUTQoYFzBrP2xsXiCpsPuXl3WP6GY7JKnGq65nmzXOn3Dr+OPJ26+DsLcqlH7Q2YG49jOOsrXZreX4jAxlumjsjJ9ZUuWslirY3DybJmZ8ktJArW4vM9ZdWZ7stJS2KIq0/2wcGDBgwYED3IY8g+Aui7z5bxB0pyN2LCnf/yH1YdxrFt66c3TPGQZrJNfNZT7cdTICDXpnzDQoxWIuCdncYmI0udwMWuLiuyZ8qoGfPqoEltS0fzy9dG+XIzeLTsTtfa7JAObuBu9vt3cozoMwzS7COih1vUYSu7a6JcSQFtQ1JlK8wmdSO0nIbW4KYZML0cAJHXxSswzpGXwNmb80o7s530HrAk6xVMRfkGwhX6GuPQiicCXLwhTrifJjng2qPUIDFVvJiAlnm8PJen4ACtSYVxRY+q3C7h3ccYMgOY/zObHSDaVGBczkXFVYCYCunkySkYG1Z4KRM0Dd3L8reg/EFF0fncNThr9dpBIrREhWmXHAcw/TwKsL8eROBiwFH+9stD/8nrOLLX2QXMJdP4LpNwVnUQCBMQWFAYxFCST10giLZvr8knTIuOAsKWguA7OCAzYjawke13qxAqpjkS+k687V7EXAEZClcC+xnM1cTocwelH1FzsO4Ib30yrUJn7QRrWCunCEGLrQmZ5Q4h3Cg5RzsNu58LKYAm55u7M0Qyoet7YG9rLqgYuBDlkdUpvfhwCxQCYOUUzM8hjP0fWweUmlIX3fgxIUPB1fUsZfUL5Ch26EdRFeQroICDsaoAOYtTkdiCCxhDU0LHBQLMkmvOTgRUxoBkJ5DgM7jC4GGzuaZwEmHC1XBAb7neovDBH1iCG1NZwzNLgzDIEMM7Ot+v88EIz0L4jWcCKN0rQpKHJ6XtC/D2oZpOlPQRqFAF6bhdWw7qGa4SdMljGLSNPWg91+nsXHtzeFSmirph/4dbfI6ZBLSdUbjWoCx8Bd2VzzbgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAX+E/0I37asM1JdEAAAAASUVORK5CYII="
                    alt=""
                  />
                </div>
              ) : (
                ""
              )}
              {moreCustomer ? (
                <button onClick={OpenMoreCustomer}> Show Less </button>
              ) : (
                ""
              )}
            </div>
            <OurPresence/>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
