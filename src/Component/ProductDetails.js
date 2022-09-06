import React from 'react'

function ProductDetails(){
    return(
        <section id="pro-detail" className="section-p1">

        <div id="img-5">
            <img src="img/products/f1.jpg" width="100%" id="MainImg" alt=""/>
            
            <div className="small-img-group">
                <div className="small-img-col">
                    <img src="img/products/f1.jpg" className="smallImg" width="100%" alt=""/>
                </div>
                <div className="small-img-col">
                    <img src="img/products/f2.jpg" className="smallImg" width="100%" alt=""/>
                </div>
                <div className="small-img-col">
                    <img src="img/products/f3.jpg" className="smallImg" width="100%" alt=""/>
                </div>
                <div className="small-img-col">
                    <img src="img/products/f4.jpg" className="smallImg" width="100%" alt=""/>
                </div>
            </div>
        </div>
        <div id="des">
            <h6>Home/ T-Shirt</h6>
            <h4>Men's Fashion T-Shirt</h4>
            <h2>$13</h2>
            <select name="Select size" id="">
                <option value="">Select Size</option>
                <option value="">XL</option>
                <option value="">XXL</option>
                <option value="">Large</option>
                <option value="">Medium</option>
                <option value="">Small</option>
            </select>
            <input type="number" value="1"/>
            <button className="normal">Add to Cart</button>
            <h4>products details</h4>
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea itaque tempore suscipit cum est, libero dicta enim eaque quisquam? Exercitationem cum a delectus magnam!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus error maxime magnam illo itaque, neque aperiam harum culpa, odit sed ut iste odio et.
            </span>
        </div>
    </section>
    )
}

export default ProductDetails