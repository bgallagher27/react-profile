import React from "react";
import Wrapper from "../Wrapper";

function Contact(props) {
    return (
        <div>
            <Wrapper>
                <div>
                    <h1>Contact</h1>
                </div>

                <div className="row">
                    <div className="col-xs-12 col-md-10" id="BG-contact">
                        <h5>Reach Brendan by any of the contact methods below:</h5>
                        <ul>
                            <li>Phone: 978-618-5782</li>
                            <li>Email: bpgallagher27@gmail.com</li>
                            <li><a href="https://github.com/bgallagher27/responsive-profile/blob/master/assets/resume.pdf" target="blank">Professional Resume</a></li>
                            <li>Github Profile: <a href="https://github.com/bgallagher27" target="blank">bgallagher27</a></li>
                            <li>LinkedIn Profile: <a href="https://www.linkedin.com/in/brendan-gallagher-38345050/" target="blank">Brendan Gallagher</a></li>
                        </ul>
                    </div>
                </div>
            </Wrapper>
        </div>
    )
};

export default Contact;