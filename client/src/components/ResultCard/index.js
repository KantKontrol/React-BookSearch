import React from "react";
import "./index.css";

function ResultCard(props){
    return (
        <div className="col-10 mt-3 mx-auto result-card-style">
            <div className="row" style={{ marginBottom: 10 + "px"}}>
                <div className="col-6">
                    <h2>{props.title}</h2>
                    <h4>Written By: {props.auth}</h4>
                </div>
                <div className="col-6">
                    <div className="btn-group" role="group">
                        <a type="button" className="btn btn-secondary" href={props.link} >View</a>
                        {props.save ? <button type="button" className="btn btn-secondary" onClick={() => props.handleSave(props)}>Save</button> : <button type="button" className="btn btn-secondary" onClick={() => props.handleDelete(props.id)}>Delete</button>}                   
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-2">
                    <div className="image">
                        <img src={props.img} width="150px" height="150px" alt="thumbnail" />
                    </div>
                </div>
                <div className="col-10">
                    <div className="description">{props.desc}</div>
                </div>              
            </div>
        </div>
    );
}

export default ResultCard;