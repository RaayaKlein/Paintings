import React from 'react'
import Country from '../Country'

const England = () => {
    return (
        <Country cname="England" 
        flag="https://upload.wikimedia.org/wikipedia/en/thumb/b/be/Flag_of_England.svg/1920px-Flag_of_England.svg.png"
        capital="London"
        lang="English"
        ethnics="85.4% White, 7.8% Asian, 3.5% Black, 2.3% Mixed, 1.0% Other"
        religion="59.4% Christianity
        24.7% No religion
        5.0% Islam
        1.5% Hinduism
        2.2% Other
        7.2% Not stated"
        area="• Land- 130,279 km2"
        population="56,286,961"
        currency="Pound sterling"
        images={images}
        />
    )
}
const images=[
    {photo:"https://get.wallhere.com/photo/London-England-river-bridge-Big-Ben-ferris-wheel-677936.jpg", txt:"London - the Big Ben"}, 
    {photo:"", txt:""}, 
    {photo:"", txt:""}, 
    {photo:"", txt:""}, 
    {photo:"", txt:""}, 
    {photo:"", txt:""}
]

export default England
