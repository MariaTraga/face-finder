import React from "react";
import './ImageLinkForm.css'

const ImageLinkForm =({onInputChange, onPictureSubmit})=>{
    return(
        <div>
            <p className='f3'>
                {'The Face Finder will find faces, hidden or not, in your pictures. Give it a try.'}
            </p>
            <div className='center'>
                <div className='form center pa4 br3 shadow-5'>
                    <input className='br2 f4 pa2 w-70 center' type='text' onChange={onInputChange}/>
                    <button className='br2 w-30 grow f4 link ph3 pv2 dib white bg-gold' onClick={onPictureSubmit}>Find</button>
                </div>
                
            </div>
        </div>
    );
}

export default ImageLinkForm;