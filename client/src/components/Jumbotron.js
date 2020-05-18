import React from "react";

function Jumbotron(props){
    return (
        <div className="jumbotron" >
            <h1 className="display-4 mx-auto" style={{ fontSize: 5 + "vw", width: "max-content" }}>{props.title}</h1>
            <p className="lead mx-auto" style={{ fontSize: 3 + "vw", width: "max-content" }}>{props.lead}</p>
        </div>
    );
}

export default Jumbotron;