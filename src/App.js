import React, { Component } from 'react';

// BackgroundColor
import { AnimatedBg, Transition } from 'scroll-background';

// SlideShow
import HomeSlideShow from './HomeSlideShow.js';
import "../node_modules/react-image-gallery/styles/css/image-gallery.css";

// Particles
import { DawnParticles, NightParticles } from './BaseParticles.js';



// Plane
import Plane from './Plane.js';
import "./css/plane.css";

const dawnRgb = "#EDADAB"
const dayRgb = "#33B2F5"
const sunsetRgb = "#FF8021"
const nightRgb = "#232741"


function HomeCard(props) {
  return <div className="row">
            <div className="homeCard mx-auto">
              <img
                src={require('./files/mrlicorne_logo.jpg')}
                style= {{width: "215px"}}
                alt="MrLicorne logo"/>
            </div>
         </div>
}

function PageSection(props) {
  return  <section style={{padding: '2vh 0', border: "1px solid black", height: '100vh'}}
                   className='pageSection'>
              {props.children}
          </section>
}


class SectionComponent extends Component {

  render() {
      return (
        <div className="container-fluid"
             style= {{padding: '0'}}>
            <AnimatedBg>

              <PageSection id="dawnSection">
                <div className="particlesSky">
                  <DawnParticles />
                </div>
              </PageSection>

              <Transition height="170px" from={dawnRgb} to={dayRgb} position={0.75} />

              <PageSection id="daySection"/>

              <Transition height="170px" from={dayRgb} to={sunsetRgb} position={0.75} />

              <PageSection id="sunsetSection" />

              <Transition height="170px" from={sunsetRgb} to={nightRgb} position={0.75} />

              <PageSection id="nightSection">
                <div className="particlesSky">
                  <Plane />
                  <NightParticles />
                </div>
              </PageSection>

            </AnimatedBg>
        </div>
      );
  }
}




class App extends Component {

  render() {
    return (
      <div className="container-fluid App">
          <HomeCard/>
            <div className="row"
                 style= {{marginTop: "-75px"}}>
              <HomeSlideShow/>
              <SectionComponent style= {{width: '100%'}}/>
            </div>
      </div>
    );
  }
}

export default App;
