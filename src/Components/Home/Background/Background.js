import React from 'react'
import backgroundStyles from "./Background.module.css"
import bg from '../../../Images/pexle.jpg'
const Background = () => {
    return (
        <section className={backgroundStyles.backgroundSection}>
            <img alt='' src={bg}/>
            <div className={backgroundStyles.backgroundData}>
                <h1>welcome to Our website</h1>
                <p>We are delighted to welcome you to our space! Your presence
                    here is a true honor, and we hope that your time
                    with us will be both enjoyable and meaningful. We are committed
                    to ensuring that your experience is pleasant, comfortable, and memorable.
                </p>
            </div>
        </section>
    )
}

export default Background