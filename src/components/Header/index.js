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
                        <Link to="/">
                            About Me
                        </Link>
                        {/* <Link to="/portfolio">
                            Portfolio
                        </Link>
                        <Link to="/contact">
                            Contact
                        </Link> */}
                    </nav>
                </span>
            </div>
            { props.children }
        </div>
    )
};

export default Header;