import React from "react";
function Footer() {
    return(
        <div className="footer text-center">
            <div className="container">
                <div className="row">
                    <p className="footernote">
                        Connect with me:
                    </p>
                    <ul className="social-iconsfooter">
                        <li><a href="https://www.linkedin.com/in/georgina-levitki-68a4a01ba/" target="_blank"><i
                                    className="fa fa-linkedin"></i></a></li>
                        <li><a href="https://github.com/glevii" target="_blank"><i className="fa fa-github"></i></a></li>
                    </ul>
                    <p>
                        &copy; 2021 - Georgina Levitki<br />
                    </p>
                </div>
            </div>
        </div>  
    )
}

export default Footer;