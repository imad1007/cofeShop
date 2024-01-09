import React, { useEffect, useState } from 'react'
import '../css/Caffe_listing_page.css'
import Card from './Card'
export default function Caffe_listing_page() {
        const [cofeDate,setCofeDate] = useState([]);
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json')
            .then(response => response.json())
            .then(data => {
                setCofeDate(data)
            })
            .catch(error => {
                console.log(error)
            })
    }, [])
    
    return (
        <div className="container">
            <div className="collection">
                <div className="texts_content">
                    <h1>Our Collection</h1>
                    <p>
                        Introducing our Coffee Collection,
                        a selection of unique coffees from different roast
                        types and origins, expertly roasted in small batches and shipped fresh weekly.
                    </p>
                    <div className="buttons">
                        <button id='first_button'> All Products</button>
                        <button id='sucond_button'>Available Now</button>
                    </div>
                </div>
                <div className="cards_display">
                    <Card  data={cofeDate}/>
                </div>
            </div>
        </div>
    )
}
