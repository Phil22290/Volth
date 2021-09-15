import React from 'react'
import { ButtonStory } from '../components/ButtonElements'
import "../components/HeroSection/HeroSection.css"

const Story = () => {
    return(
        <div className="hero-container-story">
            <h1>Our Story.</h1>
            <p>At Volth, we never liked having to get into our cars to drive to work. We'd rather be on our bikes, enjoying the fresh air and getting a free fitness-session in the meanwhile.</p>

            <p>To our disbelief, there were not a lot of electric bike options out there. We decided to create our own.</p>

            <p>Meet our dream-on-wheels: the Volth Bike. </p>

            <p>We haven't officially launched yet as we are still looking for 5 million dollars in funds, to get started. </p>
            <p>If you are interested in funding us, contact us via the button below, or hit us up on our social media. </p>
            <div className="hero-btns-story">
                <ButtonStory fontBig big primary>
                    CONTACT US
                </ButtonStory>        
            </div>
        </div>
    )
}

export default Story