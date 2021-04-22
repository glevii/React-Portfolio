import React from "react";
function Projects() {
    return (
        <section className="item content">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="projectbox">
                            <div className="projectimage">
                                <span className="imgproject"><img src="images/bonappetit.png" alt="" /></span>
                            </div>
                            <div className="project-details">
                                <a href="https://karryns.github.io/Project_1/" target="_blank">
                                    <h1>Project 1: Bon APPetit</h1>
                                </a>
                                <span className="deployed">
                                    <a href="https://github.com/KarrynS/Project_1" target="_blank"> <span
                                        className="deployed-d"><i className="fa fa-github"></i> </span> </a>
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="projectbox">
                            <div className="projectimage">
                                <span className="imgproject"><img src="images/notetaker.JPG" alt="" /></span>
                            </div>
                            <div className="project-details">
                                <a href="https://desolate-tundra-49897.herokuapp.com/" target="_blank">
                                    <h1>Note Taker</h1>
                                </a>
                                <span className="deployed">
                                    <a href="https://github.com/glevii/Express.js-Note-Taker" target="_blank"> <span
                                        className="deployed-d"><i className="fa fa-github"></i> </span> </a>
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="projectbox">
                            <div className="projectimage">
                                <span className="imgproject"><img src="images/password-generated.JPG" alt="" /></span>
                            </div>
                        </div>
                        <div className="project-details">
                            <a href="https://glevii.github.io/Password_Generator/" target="_blank">
                                <h1>Password Generator</h1>
                            </a>
                            <span className="deployed">
                                <a href="https://github.com/glevii/Password_Generator" target="_blank"> <span
                                    className="deployed-d"><i className="fa fa-github"></i> </span> </a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
                        
        <hr/>
            <div className="resume">
                <h2>Click to: <button type="button" className="btn-dark"> <a href="images/Georgina Levitki, Resume.pdf"
                    target="_blank"> View Resume</a></button></h2>
            </div>
</section>

    )
}

export default Projects;