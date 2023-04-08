import React from "react";

const EducationBlock = (education: any) => {

  return (<li key={education.data.year} className="educationList-item">
    <div className="year">{education.data.year}</div>
    <div className="detail">
      <span className="certification">{education.data.certification}</span>
      <span className="institution">{education.data.institution}</span>
    </div>
  </li>)
}
export default EducationBlock