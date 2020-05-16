import React from "react";

function Jumbotron(props){
    return (
        <div className="jumbotron align-center">
            <h1 className="display-4 mx-auto" style={{ width: "max-content" }}>{props.title}</h1>
            <p className="lead mx-auto" style={{ width: "max-content" }}>{props.lead}</p>
        </div>
    );
}

export default Jumbotron;