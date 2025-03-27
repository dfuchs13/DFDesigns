import React, { useState, useEffect } from "react";
import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import "react-photo-album/styles.css";
import "./PhotoGallery.css";

const images = [
  { src: "/DFDesigns/images/photo1.jpg", width: 800, height: 600, index: 0 },
  { src: "/DFDesigns/images/photo2.jpg", width: 800, height: 600, index: 1 },
  { src: "/DFDesigns/images/photo3.jpg", width: 800, height: 600, index: 2 },
  { src: "/DFDesigns/images/photo4.jpg", width: 800, height: 600, index: 3 },
  { src: "/DFDesigns/images/photo5.jpg", width: 800, height: 600, index: 4 },
  { src: "/DFDesigns/images/photo6.jpg", width: 800, height: 600, index: 5 },
  { src: "/DFDesigns/images/photo7.jpg", width: 800, height: 600, index: 6 },
  { src: "/DFDesigns/images/photo8.jpg", width: 800, height: 600, index: 7 },
  { src: "/DFDesigns/images/photo9.jpg", width: 800, height: 600, index: 8 },
  { src: "/DFDesigns/images/photo10.jpg", width: 800, height: 600, index: 9 },
  { src: "/DFDesigns/images/photo11.jpg", width: 800, height: 600, index: 10 },
  { src: "/DFDesigns/images/photo12.jpg", width: 800, height: 600, index: 11 },
  { src: "/DFDesigns/images/photo13.jpg", width: 800, height: 600, index: 12 },
  { src: "/DFDesigns/images/photo14.jpg", width: 800, height: 600, index: 13 },
  { src: "/DFDesigns/images/photo15.jpg", width: 800, height: 600, index: 14 },
  { src: "/DFDesigns/images/photo16.jpg", width: 800, height: 600, index: 15 },
  { src: "/DFDesigns/images/photo17.jpg", width: 800, height: 600, index: 16 },
  { src: "/DFDesigns/images/photo18.jpg", width: 800, height: 600, index: 17 },
  { src: "/DFDesigns/images/photo19.jpg", width: 800, height: 600, index: 18 },
  { src: "/DFDesigns/images/photo20.jpg", width: 800, height: 600, index: 19 },
  { src: "/DFDesigns/images/photo21.jpg", width: 800, height: 600, index: 20 },
  { src: "/DFDesigns/images/photo22.jpg", width: 800, height: 600, index: 21 },
  { src: "/DFDesigns/images/photo23.jpg", width: 800, height: 600, index: 22 },
  { src: "/DFDesigns/images/photo24.jpg", width: 800, height: 600, index: 23 },
  { src: "/DFDesigns/images/photo25.jpg", width: 800, height: 600, index: 24 },
  { src: "/DFDesigns/images/photo26.jpg", width: 800, height: 600, index: 25 },
  { src: "/DFDesigns/images/photo27.jpg", width: 800, height: 600, index: 26 },
  { src: "/DFDesigns/images/photo28.jpg", width: 800, height: 600, index: 27 },
  { src: "/DFDesigns/images/photo29.jpg", width: 800, height: 600, index: 28 },
  { src: "/DFDesigns/images/photo30.jpg", width: 800, height: 600, index: 29 },
  { src: "/DFDesigns/images/photo31.jpg", width: 800, height: 600, index: 30 },
  { src: "/DFDesigns/images/photo32.jpg", width: 800, height: 600, index: 31 },
  { src: "/DFDesigns/images/photo33.jpg", width: 800, height: 600, index: 32 },
  { src: "/DFDesigns/images/photo34.jpg", width: 800, height: 600, index: 33 },
  { src: "/DFDesigns/images/photo35.jpg", width: 800, height: 600, index: 34 },
  { src: "/DFDesigns/images/photo36.jpg", width: 800, height: 600, index: 35 },
  { src: "/DFDesigns/images/photo37.jpg", width: 800, height: 600, index: 36 },
  { src: "/DFDesigns/images/photo38.jpg", width: 800, height: 600, index: 37 },
  { src: "/DFDesigns/images/photo39.jpg", width: 800, height: 600, index: 38 },
  { src: "/DFDesigns/images/photo40.jpg", width: 800, height: 600, index: 39 },
  { src: "/DFDesigns/images/photo41.jpg", width: 800, height: 600, index: 40 },
  { src: "/DFDesigns/images/photo42.jpg", width: 800, height: 600, index: 41 },
  { src: "/DFDesigns/images/photo43.jpg", width: 800, height: 600, index: 42 },
  { src: "/DFDesigns/images/photo44.jpg", width: 800, height: 600, index: 43 },
  { src: "/DFDesigns/images/photo45.jpg", width: 800, height: 600, index: 44 },
  { src: "/DFDesigns/images/photo46.jpg", width: 800, height: 600, index: 45 },
  { src: "/DFDesigns/images/photo47.jpg", width: 800, height: 600, index: 46 },
  { src: "/DFDesigns/images/photo48.jpg", width: 800, height: 600, index: 47 },
  { src: "/DFDesigns/images/photo49.jpg", width: 800, height: 600, index: 48 },
  { src: "/DFDesigns/images/photo50.jpg", width: 800, height: 600, index: 49 },
  { src: "/DFDesigns/images/photo51.jpg", width: 800, height: 600, index: 50 },
  { src: "/DFDesigns/images/photo52.jpg", width: 800, height: 600, index: 51 },
  { src: "/DFDesigns/images/photo53.jpg", width: 800, height: 600, index: 52 },
  { src: "/DFDesigns/images/photo54.jpg", width: 800, height: 600, index: 53 },
  { src: "/DFDesigns/images/photo55.jpg", width: 800, height: 600, index: 54 },
  { src: "/DFDesigns/images/photo56.jpg", width: 800, height: 600, index: 55 },
  { src: "/DFDesigns/images/photo57.jpg", width: 800, height: 600, index: 56 },
  { src: "/DFDesigns/images/photo58.jpg", width: 800, height: 600, index: 57 },
  { src: "/DFDesigns/images/photo59.jpg", width: 800, height: 600, index: 58 },
  { src: "/DFDesigns/images/photo60.jpg", width: 800, height: 600, index: 59 },
  { src: "/DFDesigns/images/photo61.jpg", width: 800, height: 600, index: 60 },
  { src: "/DFDesigns/images/photo62.jpg", width: 800, height: 600, index: 61 },
  { src: "/DFDesigns/images/photo63.jpg", width: 800, height: 600, index: 62 }
];

const PhotoGallery = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    }, []);
  const [index, setIndex] = useState(-1); 

  const handleClick = ({ index }) => {
    console.log("Photo clicked:", index); 
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
