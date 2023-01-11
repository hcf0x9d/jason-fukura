import React from 'react';
import IndexIntro from "../parts/IndexIntro";
import IndexGallery from "../parts/IndexGallery";
import Contact from "../parts/Contact";

function Index(data: any) {
  return (
    <>
      <IndexIntro />
      <IndexGallery cases={data.data} />
      <Contact />
    </>
  );
}

export default Index;
