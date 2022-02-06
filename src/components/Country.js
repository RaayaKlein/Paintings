import React from 'react'

const Country = (props) => {
    return (
        <div>
            <h2 className="countryHeader">{props.cname}</h2>

            <img src={props.flag} className="flag" height="100px"/>

            <div className="details">
            <h5><b>Capital:</b> {props.capital}</h5>
            <h5><b>National language: </b>{props.lang}</h5>
            <h5><b>Ethnic groups:</b> {props.ethnics}</h5>
            <h5><b>Religion: </b>{props.religion }</h5>
            <h5><b>Area:</b> {props.area}</h5>
            <h5><b>Population:</b> {props.population}</h5>
            <h5><b>Currency:</b> {props.currency}</h5>
            </div>

            <div>
                <h3>Best spots</h3>
                {props.images.map((e, idx)=>
                    <div key={idx} class="responsive">
                            <div class="gallery">
                                <img src={e.photo} width="600" height="400"/>
                                <div class="desc">{e.txt}</div>
                            </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Country
