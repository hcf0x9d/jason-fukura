import React from 'react';

function IndexGalleryItem(item: any) {

  let classnames = 'gallery-item';
  if (item.index % 2 !== 0) {
    classnames += ' mod-even';
  }
  return (
    <article className={classnames} key={item.item.id}>
      <figure className="gallery-item-image">
        <a className="gallery-item-image-link" href={`/jason-fukura/case-study/${item.item.id}`}>
          <img
            src={item.item.images.gallery[0]}
            alt={item.item.summary}
            style={{transform: item.item.images.gallery[1] === "top" ? "translateY(-10px)" : "translateY(10px)"}}
          />
        </a>
      </figure>
      <div className="gallery-item-content">
        <h3 className="heading-1">
          <a className="gallery-item-link" href={`/jason-fukura/case-study/${item.item.id}`}>{item.item.title}</a>
        </h3>
        <h4 className="heading-4">{item.item.company}</h4>
        <p>{item.item.summary}</p>
        <ul className="metaList">
          {item.item.tags.map((tag: string) => (<li className="metaList-item" key={tag}>
            <div className="tag">{tag}</div>
          </li>))}
        </ul>
      </div>
    </article>
  );
}

export default IndexGalleryItem;
