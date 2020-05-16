import React from "react";
import "./style.css";

function Wrapper(props) {
    return (
        <div className="row">
            <section className="content col-xs-12 col-md-8">{ props.children }</section>
        </div>
    )
};

export default Wrapper;