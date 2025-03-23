import React, { useState } from "react";
import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import "react-photo-album/styles.css";
import "./PhotoGallery.css";

// List of image paths from public/images folder
const images = [
  {
    src: `${process.env.PUBLIC_URL}/images/image1.jpg`, // Correct path using PUBLIC_URL
    width: 800,
    height: 600,
  },
  {
    src: `${process.env.PUBLIC_URL}/images/image2.jpg`, // Correct path using PUBLIC_URL
    width: 800,
    height: 600,
  },
  // Add all other images here
];

console.log("Images loaded:", images); // Debugging the loaded images

const PhotoGallery = () => {
  const [index, setIndex] = useState(-1); // Track the selected image index

  const handleClick = ({ index }) => {
    console.log("Photo clicked:", index); // Debugging click event
    setIndex(index);
  };

  return (
    <div className="gallery-container">
      <div className="photo_title">
        <h1>| Photography |</h1>
      </div>
      <div className="photo_text">
        <p>
          This collection showcases my passion for capturing moments through a creative lens, featuring a variety of subjects from landscapes and cityscapes to portraits and action shots. Each image reflects my eye for composition, lighting, and storytelling. Click on any photo to view it in full detail with an interactive lightbox experience. Enjoy exploring my work!
        </p>
      </div>

      <PhotoAlbum
        layout="rows"
        photos={images}
        targetRowHeight={250}
        onClick={handleClick}
      />

      {index >= 0 && (
        <Lightbox
          slides={images.map((img) => ({ src: img.src }))}
          open={index >= 0}
          index={index}
          close={() => setIndex(-1)}
        />
      )}
    </div>
  );
};

export default PhotoGallery;
