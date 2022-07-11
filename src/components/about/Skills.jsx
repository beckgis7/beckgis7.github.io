import React from "react";

const skillsContent = [
  { skillClass: "p95", skillPercent: "95", skillName: "ANGULAR" },
  { skillClass: "p65", skillPercent: "65", skillName: "REACT" },
  { skillClass: "p85", skillPercent: "85", skillName: "LARAVEL" },
  { skillClass: "p85", skillPercent: "85", skillName: "NODEJS" },
  { skillClass: "p99", skillPercent: "99", skillName: "HTML" },
  { skillClass: "p90", skillPercent: "90", skillName: "JAVASCRIPT" },
  { skillClass: "p98", skillPercent: "98", skillName: "CSS" },
  { skillClass: "p89", skillPercent: "89", skillName: "PHP" },
  { skillClass: "p98", skillPercent: "98", skillName: "WORDPRESS" },
  { skillClass: "p60", skillPercent: "60", skillName: "JQUERY" },
  { skillClass: "p85", skillPercent: "85", skillName: "IONIC" },
];

const Skills = () => {
  return (
    <>
      {skillsContent.map((val, i) => (
        <div className="col-6 col-md-3 mb-3 mb-sm-5" key={i}>
          <div className={`c100 ${val.skillClass}`}>
            <span>{val.skillPercent}%</span>
            <div className="slice">
              <div className="bar"></div>
              <div className="fill"></div>
            </div>
          </div>
          <h6 className="text-uppercase open-sans-font text-center mt-2 mt-sm-4">
            {val.skillName}
          </h6>
        </div>
      ))}
    </>
  );
};

export default Skills;
