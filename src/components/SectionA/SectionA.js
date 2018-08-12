import React, { Component } from "react";
import "./SectionA.css";
class SectionA extends Component {
  render() {
    return (
      <div>
        <header className="v-header container">
          {/* <div className="fullscreen-video-wrap">
            <video src="haircutvid.mov" autoPlay="true" loop="true" playsInline/>
          </div> */}
        <iframe  src="https://www.youtube.com/embed/hMEu05lSFA8?rel=0&autoplay=1&mute=1&amp;controls=0&amp;showinfo=0&amp;start=220" frameBorder="0" playsInline></iframe>
        </header>
       
      </div>
    );
  }
}

export default SectionA;
