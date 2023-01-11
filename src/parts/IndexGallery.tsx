import React from 'react';
import IndexGalleryItem from "./IndexGalleryItem";

function IndexGallery(cases: any) {
  return (
    <section className="gallery">
      {cases.cases.map((item: any, index: number) => (<IndexGalleryItem item={item} index={index} key={item.id} />))}
    </section>
  );
}

export default IndexGallery;
