import React from 'react'
import img1 from '../../gallery/2022/1.jpg' 
import img2 from '../../gallery/2022/2.jpg' 

const G2022 = () => {
    return (
        <div className="row container">
        
        <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
            <div className="galleryImg">
                <img src={img1} width={200} className="w-100 shadow-1-strong rounded mb-4" alt="image"/>
                {/* <p>Gandalf</p> */}
            </div>
            {/* <img src={img2} className="w-100 shadow-1-strong rounded mb-4 galleryImg" alt="image"/> */}
        </div>

        <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
            <img src={img2} className="w-100 shadow-1-strong rounded mb-4 galleryImg" alt="image"/>
        </div>

        </div>
    )
}

export default G2022
