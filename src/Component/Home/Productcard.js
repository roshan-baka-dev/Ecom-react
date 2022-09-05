import React from 'react'

function Productcard(props){
    return(
        <div className="pro">
                <img src={props.src} alt=""/>
                <div class="des">
                    <span>adidas</span>
                    <h5>Cartoon Astronaut T-Shirt</h5>
                    <div class="star">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                    </div>
                    <h3>$78</h3>
                </div>
                <i class="fa-solid fa-shopping-cart"></i>
            </div>
    )
}

export default Productcard