import React from 'react'

const Header = (props) => {
    return (
        <div className="container-fluid headerbg">
            <h2 className='headerTxt'>{props.myHeader}</h2>
        </div>
    )
}

export default Header;
