import React from 'react';

const Contact = () => {
    return (
        <section id="contact">
            <div className='con'>
            <h1>Contact me</h1>
            </div>
            <form>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" required />

                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />

                <label htmlFor="message">Message:</label>
                <textarea id="message" name="message" required></textarea>

                <button type="submit">Send</button>
            </form>
        </section>
    );
};

export default Contact;

