import React from 'react';
import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";
import { Photo } from "../App/App.types";

interface PhotoGalleryProps {
  items: Photo[];
  onPhotoClick: (slug: string) => void;
}

const ImageGallery: React.FC<PhotoGalleryProps> = ({ items, onPhotoClick }) => {
  return (
    <ul className={css.imgList}>
      {items.map(({ id, urls, slug }) => (
        <li key={id}>
          <ImageCard link={urls} title={slug} onClick={onPhotoClick} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
