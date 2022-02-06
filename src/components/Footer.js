import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-light text-center text-white footer">
        <div className="container p-4 pb-0">
            <section className="mb-4">
            <a
                className="btn btn-floating m-1 icons"
                href="https://www.facebook.com/profile.php?id=100017606283467"
                role="button"
                ><i className="fab fa-facebook-f"></i
            ></a>

            <a
                className="btn btn-floating m-1 icons"
                href="https://www.instagram.com/rayaklein_art/?hl=en"
                role="button"
                ><i className="fab fa-instagram"></i
            ></a>

            <a
                className="btn btn-floating m-1 icons"
                href="#!"
                role="button"
                ><i className="fab fa-linkedin-in"></i
            ></a>
            <a
                className="btn btn-floating m-1 icons"
                href="#!"
                role="button"
                ><i className="fab fa-github"></i
            ></a>
            </section>
        </div>

        <div className="text-center p-3" style={{backgroundColor: 'mediumaquamarine'}}>
            © 2021 Copyright Raaya Klein
            {/* <a className="text-white" href="#">Raaya Klein</a> */}
        </div>
        
        </footer>
    )
}

export default Footer
