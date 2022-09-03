import React from 'react'

function Newsletter(){
    return(
        <section id="newsletter" class="section-m1">
        <div class="box1">
            <h2>Sign Up for NewsLetter</h2>
            <h6>Get E-mail updates about our latest shop and <span>special offer</span></h6>
        </div>
        <div class="box2">
            <input type="email" placeholder="Your email address"/>
            <button class="normal">Sign Up</button>
        </div>
    </section>
    )
}

export default Newsletter