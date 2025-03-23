import React from 'react';
import { Link } from 'react-router-dom';
import '../pages/Portfolio.css';
import Portfolio1 from '../squares/snowdrop.png';
import Portfolio2 from '../squares/rugby.png';
import Portfolio3 from '../squares/bane.png';
import Portfolio4 from '../squares/Goodness.png';
import Portfolio5 from '../squares/school.png';
import Portfolio6 from '../squares/safe.png';
import Portfolio7 from '../squares/husky1.png';
import Portfolio8 from '../squares/husky2.png';
import Portfolio9 from '../squares/state.png';
import Portfolio10 from '../squares/article.png';
import Portfolio11 from '../squares/iit.png';
import Portfolio12 from '../squares/foxburrow.png';
import Portfolio13 from '../squares/million.png';
import Portfolio14 from '../squares/huber.png';
import Portfolio15 from '../squares/photo.png';
import { useEffect } from 'react';


const portfolioItems = [
    { src: Portfolio1, alt: 'Snowdrop Winery', title: 'Snowdrop Winery', link: '/Snowdrop' },
    { src: Portfolio2, alt: 'Rugby Logos', title: 'Logos', link: '/Logo' },
    { src: Portfolio3, alt: 'Illustrations', title: 'Illustrations', link: '/Illustrations' },
    { src: Portfolio4, alt: 'Goodness Revolution', title: 'Revolution of Goodness', link: '/Goodness' },
    { src: Portfolio5, alt: 'School Stuff', title: 'School Projects', link: '/School' },
    { src: Portfolio6, alt: 'Videography', title: 'Videography', link: '/Video' },
    { src: Portfolio7, alt: 'AAHMN', title: 'Adopt a Husky MN', link: '/AAHMN' },
    { src: Portfolio8, alt: 'Klondike', title: 'Klondike Dog Derby', link: '/Klondike' },
    { src: Portfolio9, alt: 'State Designs', title: 'State Designs', link: '/State' },
    { src: Portfolio10, alt: 'GVHD Article', title: 'GVHD Article', link: '/Biology' },
    { src: Portfolio11, alt: 'IIT Posters', title: 'IIT Posters', link: '/IIT' },
    { src: Portfolio12, alt: 'Foxburrow Winery', title: 'Foxburrow Winery', link: '/Fox' },
    { src: Portfolio13, alt: 'A Million Dreams Video', title: 'A Million Dreams Video', link: '/Million' },
    { src: Portfolio14, alt: 'Huber Home Services', title: 'Huber Home Services', link: '/Huber' },
    { src: Portfolio15, alt: 'Photography', title: 'Photography', link: '/PhotoGallery' },
  ];

  function Portfolio() {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
    
    return (
      <section id="portfolio">
        <div className="grid-imgs">
          {portfolioItems.map((item, index) => (
            <div className="image-container" key={index}>
              <Link to={item.link}>  {/* Wrap the image and overlay with Link */}
                <img src={item.src} alt={item.alt} className="grid-img" />
                <div className="overlay">
                  <div className="title">{item.title}</div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </section>
    );
  }

export default Portfolio