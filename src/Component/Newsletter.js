import React,{useRef} from 'react'

import emailjs from '@emailjs/browser'

export default function Newsletter(){
    const form = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();
        console.log(e.target)
      emailjs.sendForm('service_y6vqekk', 'template_h5r639q', e.target, 'KMNAUPQmHZKL4ExpK')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        const input=document.getElementById('emailInput');
        input.value='';
    }
    return(
        <section id="newsletter" class="section-m1">
        <div class="box1">
            <h2>Sign Up for NewsLetter</h2>
            <h6>Get E-mail updates about our latest shop and <span>special offer</span></h6>
        </div>
        <form class="box2" onSubmit={sendEmail} ref={form}>
            <input type="email" placeholder="Your email address" name='email' id='emailInput'/>
            <button class="normal" type='submit'value="send">Sign Up</button>
        </form>
    </section>
    )
}