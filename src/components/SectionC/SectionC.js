import React, { Component } from 'react';
import './SectionC.css'
class SectionC extends Component {
    render() {
        return (
            <div className="adress">
                <h1>Hitta Oss</h1>
                <p>Address:</p>
                <p>Backavägen</p>
                <p>21432 Malmö</p>
                <div className="map">
                
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2255.3975304206588!2d13.004892815995564!3d55.57768771295152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4653a13fbaa2672b%3A0x8c8c1ec3b49b934a!2zQmFja2F2w6RnZW4sIDIxNCAzMiBNYWxtw7Y!5e0!3m2!1sen!2sse!4v1534021788057"  frameBorder="0"  ></iframe>
                </div>
            </div>
        );
    }
}

export default SectionC;