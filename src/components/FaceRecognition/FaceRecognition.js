import React from "react";
import './FaceRecognition.css';

const FaceRecognition = ({imageURL,boxes}) =>{

    const boundingBoxes = boxes.map((box,i)=>{
        return(
            <div key={i} className='bounding-box' style={{top:box.topRow, right:box.rightColumn, bottom:box.bottomRow,left:box.leftColumn}}></div>
        );
        
    })
    
    return(
        <div className='center ma'>
            <div className='absolute mt2'>
                <img id='inputimage' src={imageURL} alt='Face' width='500px' height='auto'/>
                <div className='bounding-boxes'>{boundingBoxes}</div>
            </div>  
        </div>

    );
}

export default FaceRecognition;