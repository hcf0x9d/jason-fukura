import React from "react";

const CaseStudyListBlock = (caseStudy: any) => {

  return (<li key={caseStudy.data.id} className="caseStudies-item">
    <a href={`/jason-fukura/case-study/${caseStudy.data.id}`} className="caseStudies-target">
      <div className="imgWrap">
        <img src={caseStudy.data.keyImage.url} alt={caseStudy.data.keyImage.alt} className="img"/>
      </div>
      <div className="detail">
        <h3 className="heading-3">{caseStudy.data.title}</h3>
        <p>{caseStudy.data.intro}</p>
      </div>
    </a>
  </li>)
}
export default CaseStudyListBlock