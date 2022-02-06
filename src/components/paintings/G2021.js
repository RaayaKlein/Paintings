import React from 'react'
import img1 from '../../gallery/2021/1.png' 
import img2 from '../../gallery/2021/2.png' 
import img3 from '../../gallery/2021/3.png' 
import img4 from '../../gallery/2021/4.png' 

const G2021 = () => {
    return (
        <div className="row container">
        
        <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
            <div className="galleryImg">
                <img src={img1} width={200} className="w-100 shadow-1-strong rounded mb-4" alt="image"/>
                {/* <p>Gandalf</p> */}
            </div>
            <img src={img2} className="w-100 shadow-1-strong rounded mb-4 galleryImg" alt="image"/>
        </div>

        <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
            <img src={img3} className="w-100 shadow-1-strong rounded mb-4 galleryImg" alt="image"/>
        </div>

        
        <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
            <img src={img4} className="w-100 shadow-1-strong rounded mb-4 galleryImg" alt="image"/>
        </div>

        </div>
    )
}

export default G2021
