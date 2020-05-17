import React from "react";
import "./style.css";
import Wrapper from "../Wrapper";
import ProjectCard from "../ProjectCard"
import projects from "../../projects.json";

class Portfolio extends React.Component {

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
                    <ProjectCard
                        id={ project.id }
                        key={ project.id }
                        image={ project.image }
                        title={ project.title }
                        description={ project.description }
                        deployedLink={ project.deployedLink }
                        gitLink={ project.gitLink }
                    />
                ))}                
            </Wrapper>
        </div>
    )
    }
};

export default Portfolio;