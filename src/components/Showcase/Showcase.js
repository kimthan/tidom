import React, { Component } from 'react';
import { Slide  } from 'react-slideshow-image';
import './Showcase.css'

const images = [
    'img/1.jpg',
    'img/2.jpg',
    'img/3.jpg',
    'img/4.jpg',
    'img/5.jpg',
    
    
  ];

class showcase extends Component {




    render() {
        return (
            <header id="showcase" className="grid">
             <Slide
          images={images}
          duration={1000}
          transitionDuration={1000}
        />
            <h1>Välkommen till</h1>
            <h1>King's Salong</h1>
            
          </header>
        );
    }
}

export default showcase;