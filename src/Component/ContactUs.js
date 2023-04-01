import React,{useRef} from 'react'

import emailjs from '@emailjs/browser'


const ContactUS = () => {
    const form = useRef();
  const [formStatus, setFormStatus] = React.useState('Send')
  const onSubmit = (e) => {
    e.preventDefault()
    setFormStatus('Submitting...')
    const { name, email, message } = e.target.elements
    let conFom = {
      name: name.value,
      email: email.value,
      message: message.value,
    }
    emailjs.sendForm('service_ktsmfyb', 'template_swqkrwh', e.target, 'KMNAUPQmHZKL4ExpK')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    console.log(e.target)
  }
  return (
    <div className="container mt-5">
      <h2 className="mb-3">Contact Form </h2>
      <form onSubmit={onSubmit}>
        <div className="col-xs-2">
          <label className="form-label" htmlFor="name">
            Name
          </label>
          <input className="form-control" type="text" id="name" name="name" required />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="email">
            Email
          </label>
          <input className="form-control" type="email" id="email" required name="email" />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="message" name="message">
            Message
          </label>
          <textarea className="form-control" id="message" required />
        </div>
        <button className="btn btn-primary" type="submit">
          {formStatus}
        </button>
      </form>
    </div>
  )
}
export default ContactUS