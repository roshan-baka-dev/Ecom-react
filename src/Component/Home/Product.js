import React from 'react'
import Productcard from './Productcard'
const assets=require('../Assets')

function Product(){
    return(
        <section id="product1" class="section-p1">
            <h2>Featured Products</h2>
            <p>Summer Collection New Modern Design</p>
            <div class="pro-container">

                <Productcard src={assets[0].image}/>
                <Productcard src={assets[1].image}/>
                <Productcard src={assets[2].image}/>
                <Productcard src={assets[3].image}/>
                <Productcard src={assets[4].image}/>
                <Productcard src={assets[5].image}/>
                <Productcard src={assets[6].image}/>
                <Productcard src={assets[7].image}/>
                
            </div>
        </section>
    )
}

export default Product