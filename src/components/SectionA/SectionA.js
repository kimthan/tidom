import React, { Component } from "react";
import "./SectionA.css";
class SectionA extends Component {
  render() {
    return (
      <div>
        <header className="v-header container">
          <div className="fullscreen-video-wrap">
            <video src="haircutvid.mov" autoPlay="true" loop="true" playsInline/>
          </div>
        </header>
      </div>
    );
  }
}

export default SectionA;
