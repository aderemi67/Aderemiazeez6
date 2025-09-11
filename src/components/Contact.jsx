function Contact() {
    return (
        <section className="contact" id="contact">
            <h2>Contact Me</h2>
            <form className="contact-form">
                <input type="text" placeholder="Your Name..." required />
                <input type="email" placeholder="Your Email..." required />
                <textarea placeholder="Your Message..." rows="5" required></textarea>
                <button type="submit" className="btn">Send</button>
            </form>
        </section>
    );
}

export default Contact;