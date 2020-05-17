import React from "react";

function ProjectCard(props) {
    return (
    <div className="row">
        <div className="card col-xs-12 col-md-10">
            <img 
                src={ props.image }
                className="card-img-top"
                alt={ props.title }
            />
            <div className="card-body">
            <h5 className="card-title">{ props.title }</h5>
                <p className="card-text">{ props.description }</p>
                <p className="card-text">Links:</p>
                <ul>
                    <li className="card-text">Give it a try: <a href={ props.deployedLink } target="blank">{ props.title }</a></li>
                    <li className="card-text"><a href={ props.gitLink }>Github</a></li>
                </ul>
            </div> 
        </div>
    </div>
    )
};

export default ProjectCard;