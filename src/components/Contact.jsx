export const Contact = () => {

    return(
        <section id="contact" className="contact-section"> 
            <div className="contactHolder">
                <h2>LET'S WORK TOGETHER</h2>
                <p>Send us a message with your game, metrics, and vision!</p>
                <form className="contactForm">

                    <input type="email" placeholder="Email" />
                    <textarea placeholder="Message"></textarea>
                    {/* <div className="input-group">
                        <input type="checkbox" id="terms" />
                        <label htmlFor="terms">I agree to the terms and conditions</label>
                    </div> */}
                </form>
            </div>
        </section>
    );
};