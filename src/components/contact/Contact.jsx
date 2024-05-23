import React from 'react';
import '../contact/contact.css';

import msg_icon from '../../assets/envelope.png';

import mail_icon from '../../assets/mail-icon.png';
import phone_icon from '../../assets/phone-icon.png';
import location_icon from '../../assets/3d-map.png';


const Contact = () => {


    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "1b64a354-fee1-4011-88b3-42362c6cf015");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };


    return (
        <section className='contact' id='contact'>
            <div className="contract-title">
                <p>CONTACT US</p>
                <h2>Get in Touch</h2>
            </div>
            <div className='contact__container'>
                <div className="contact-col">
                    <h3>Send me a messag <img src={msg_icon} alt="" /></h3>
                    <p>Feel free to reach out through contact form or find our contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our university community.</p>
                    <ul>
                        <li><img src={mail_icon} alt="" /> farhanahmedhamim33@gmail.com</li>
                        <li><img src={phone_icon} alt="" /> +88 01312065613</li>
                        <li><img src={location_icon} alt="" /> Ratoil - Chapta, Kashiani, Gopalganj, <br /> Dhaka: 8132</li>
                    </ul>
                </div>
                <div className="contact-col">
                    <form onSubmit={onSubmit}>
                        <label>Your name</label>
                        <input type="text" name='name' placeholder='Enter your name' required />
                        <label>Phone Number</label>
                        <input type="tel" name='phone' placeholder='Enter your mobile number' required />
                        <label>Write your messages here</label>
                        <textarea name="message" rows="6" placeholder='Enter your message' required></textarea>
                        <button type='submit'>Submit now</button>
                    </form>
                    <span>{result}</span>
                </div>
            </div>
        </section>
    )
}

export default Contact