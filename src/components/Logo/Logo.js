import React, {Component} from "react";
import './Logo.css';
import owl from './owl-logo.png';
import Tilt from 'react-parallax-tilt';

class Logo extends Component {
    render(){
        return(
            <div className='logo ma4 mt2 '>
                <Tilt className='parallax-effect'
                        perspective={500}
                        glareEnable={true}
                        glareMaxOpacity={0.45}
                        scale={1.02}>
                    <div className='inner-element ba br2 bw0 b--mid-gray shadow-3 '>
                        <div className='dot shadow-2 br2'></div>
                        <img className='logo-image' src={owl} alt='Owl'/>
                    </div>
                </Tilt>
            </div>
            
            
        );
    }
}

export default Logo;
