import Particles from 'react-particles-js';
import React from 'react';

class NightParticles extends Particles {
  
    render(){
        return (
            <Particles 
            	params={{
            		particles: {
            			number: {
            				value: 350,
            				density: {
            					value_area: 400
            				}
            			},
            			shape: {
	            			type: "circle"
	            		}, 
	            		opacity: {
	            			value: 0.9,
	            			anim: {
	            				enable: true,
	            				speed: 0.3,
	            				opacity_min: 0.2,
	            			}
	            		},
	            		size: {
	            			value: 2,
	            			random: true
	            		},
	            		line_linked: {
	            			enable: false
	            		}, 
	            		move: {
	            			speed: 0.3,
	            			direction: "left",
	            			random: true,
	            			out_mode: "out"
	            		}
            		},
            	}}	/>
		);
    };

}



class DawnParticles extends Particles {
  
    render(){
        return (
            <Particles 
            	params={{
            		particles: {
            			number: {
            				value: 150,
            				density: {
            					value_area: 100
            				}
            			},
            			shape: {
	            			type: "circle"
	            		}, 
	            		opacity: {
	            			value: 0.3,
	            			anim: {
	            				enable: true,
	            				speed: 0.5,
	            				opacity_min: 0.1,
	            			}
	            		},
	            		size: {
	            			value: 9,
	            			random: true
	            		},
	            		line_linked: {
	            			enable: false
	            		}, 
	            		move: {
	            			speed: 0.7,
	            			direction: "up",
	            			random: true,
	            			out_mode: "out"
	            		}
            		},
            	}}	/>
		);
    };

}

export { DawnParticles, NightParticles };