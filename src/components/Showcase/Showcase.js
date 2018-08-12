import React, { Component } from 'react';
import './Showcase.css'
class showcase extends Component {
    
    render() {
        return (
            <header id="showcase" className="grid">
            <div className="bg-image">
                <img src="img/showcase_desktop.jpeg" />
            </div>
            <h1>Välkommen till</h1>
            <h1>King's Salong</h1>
          </header>
        );
    }
}

export default showcase;