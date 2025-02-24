import { Contact } from "./Contact";

export const Footer = () => {
    return(

        <footer className="footer">
            <Contact />
            <div className="footerContent">
                <h2>LOGO</h2>
                <a href="#">Kaos Games LLC. All rights reserved.</a>
                <div className="footerLinks">
                    <a href="#">PORTFOLIO</a>
                    <a href="#">ABOUT</a>
                </div>
            </div>
        </footer>
    );
};