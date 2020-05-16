import React from "react";
import "./style.css";
import Wrapper from "../Wrapper";
import projects from "../../projects.json";

class Home extends React.Component {

    state = {
        projects
    };
    
    
    render() {
    return (
        <div>
            <Wrapper>
                <div>
                    <h1>Portfolio</h1>
                </div>

                { this.state.projects.map(project => (
                    <div className="row">
                        <div className="card col-xs-12 col-md-10">
                            <img 
                                src={ project.image }
                                className="card-img-top"
                                alt={ project.title }
                            />
                            <div className="card-body">
                                <h5 className="card-title">{ project.title }</h5>
                                    <p className="card-text">{ project.description }</p>
                                    <p className="card-text">Links:</p>
                                    <ul>
                                        <li className="card-text">Give it a try: <a href={ project.deployedLink } target="blank">{ project.title }</a></li>
                                        <li className="card-text"><a href={ project.gitLink }>Github</a></li>
                                    </ul>
                            </div> 
                        </div>
                    </div>
                ))}                
            </Wrapper>
        </div>
    )
    }
};

export default Home;