import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Header(props) {
    return (
        <div className="row">
            <div className="header">
                <span className="name">
                    Brendan Gallagher
                </span>

                <span className="navigation">
                    <nav>
                        <Link to="/" className="link">
                            About Me
                        </Link>
                        <Link to="/portfolio" className="link">
                            Portfolio
                        </Link>
                        <Link to="/contact" className="link">
                            Contact
                        </Link>
                    </nav>
                </span>
            </div>
            { props.children }
        </div>
    )
};

export default Header;