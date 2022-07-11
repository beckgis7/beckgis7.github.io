import React from "react";

const experienceContent = [
  {
    year: "January 2022 - Present",
    position: " Senior Software Engineer",
    compnayName: "Txt Ghana Limited",
    // details: `  Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore
    //     adipisicing elit`,
  },
  {
    year: "March 2019 – December 2021",
    position: " Senior Software Engineer",
    compnayName: "ToldoIT Limited",
    // details: `Lorem incididunt dolor sit amet, consectetur eiusmod dunt doldunt dol
    //     elit, tempor incididunt`,
  },
  {
    year: "June 2018 – September 2018",
    position: "IT Support Officer/ Graphic Designer ",
    compnayName: "Addvalue Multimedia Limited",
    // details: `Lorem ipsum dolor sit amet, tempor incididunt ut laboreconsectetur
    //     elit, sed do eiusmod tempor duntt`,
  },
  {
    year: "October 2016 – January 2018",
    position: "Lead Web Developer",
    compnayName: "Code Ghana Limited",
    // details: `Lorem ipsum dolor sit amet, tempor incididunt ut laboreconsectetur
    //     elit, sed do eiusmod tempor duntt`,
  },
];

const Experience = () => {
  return (
    <ul>
      {experienceContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font">
            {val.position}
            <span className="place open-sans-font">{val.compnayName}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Experience;
