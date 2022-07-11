import React from "react";

const personalInfoContent = [
  { meta: "first name", metaInfo: "Evans" },
  { meta: "last name", metaInfo: "Ofori" },
  // { meta: "Age", metaInfo: "27 Years" },
  { meta: "Nationality", metaInfo: "Ghanaian" },
  // { meta: "Freelance", metaInfo: "Available" },
  { meta: "Address", metaInfo: "Adentan" },
  { meta: "phone", metaInfo: "+233 24 311 2825" },
  { meta: "Email", metaInfo: "vansofori07@yahoo.com" },
  { meta: "Skype", metaInfo: "live:vansofori07" },
  { meta: "langages", metaInfo: "English" },
];

const PersonalInfo = () => {
  return (
    <ul className="about-list list-unstyled open-sans-font">
      {personalInfoContent.map((val, i) => (
        <li key={i}>
          <span className="title">{val.meta}: </span>
          <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">
            {val.metaInfo}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default PersonalInfo;
