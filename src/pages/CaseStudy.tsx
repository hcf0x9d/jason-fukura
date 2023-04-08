import React from 'react';
import {useParams} from 'react-router-dom';
import { Link } from 'react-router-dom';
import { ReactComponent as UnicornMark } from "../img/unicorn_mark.svg"

function CaseStudy(data:any) {
  const caseId = useParams().caseId;
  const selectedCase = data.data.find((c:any) => c.id === caseId)
  if ( selectedCase ) {
    return (
      <article className="main" style={{marginBottom: "5rem"}}>
        <header className="caseStudyHeader">
          <Link to="/jason-fukura/" style={{fontWeight:"bold"}}>Home</Link>
          <div className="hero">
            <div className="logo">
              <UnicornMark />
            </div>
            <img src={ selectedCase.keyImage.url } alt={ selectedCase.keyImage.alt }/>
          </div>
          <h2 className="sectionHeader">Case Study</h2>
          <h1 className="heading-2">{ selectedCase.title }</h1>
        </header>
        <div className="caseArticle">
          <aside className="pullQuote">
            <blockquote>"{ selectedCase.content.pullQuote }"</blockquote>
          </aside>
          <section className="articleBody">
            <h2 className="heading-3">Summary</h2>
            <span dangerouslySetInnerHTML={{ __html: selectedCase.content.summary }} />
            <h2 className="heading-3">Challenge</h2>
            <span dangerouslySetInnerHTML={{ __html: selectedCase.content.challenge }} />
            <h2 className="heading-3">Solution</h2>
            <span dangerouslySetInnerHTML={{ __html: selectedCase.content.solution }} />
            <h2 className="heading-3">Results</h2>
            <span dangerouslySetInnerHTML={{ __html: selectedCase.content.results }} />
          </section>
        </div>
        <section className="galleryBlock">
          <ul className="galleryList">
            {selectedCase.images.map((image: any) => (
              <li className="galleryList-item" key={ image.url }>
                <a href={ image.url } target="_blank">
                  <img src={ image.url } alt={ image.alt }/>
                </a>
              </li>
            ))}
          </ul>
        </section>
      </article>
    );
  } else {
    return (
      <>NOT FOUND</>
    )
  }
}

export default CaseStudy;
