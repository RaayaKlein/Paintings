import React from 'react';
import Header from '../components/Header';
import portrait from '../gallery/portrait.jpg'

const About = () => {
    return (
        <div>
            <Header myHeader="About the artist"/>
            <img src={portrait} height={150} style={{borderRadius:30,borderColor:'mediumaquamarine',borderWidth:2, borderStyle:'solid' }}/>
            <p className="aboutMe">

                Welcome to my gallery <br/>
                In the past few years I created many types of art such as: <br/>
                * painting - with various mediums<br/>
                * filming short movies<br/>
                * floor and mural paintings projects for clients <br/>
                I am proud to show and share my art with the world.. <br/>
                Enjoy! <br/><br/>

                * For orders - contanct me via E-mail
            </p>
        </div>
    )
}

export default About;
