import React from "react";
import "./index.css";

function ResultCard(props){
    return (
        <div class="col-10 mt-3 mx-auto result-card-style">
            <div className="row" style={{ marginBottom: 10 + "px"}}>
                <div className="col-6">
                    <h2>{props.title}</h2>
                    <h4>Written By: {props.auth}</h4>
                </div>
                <div className="col-6">
                    <div class="btn-group" role="group">
                        <button type="button" class="btn btn-secondary">View</button>
                        <button type="button" class="btn btn-secondary">Save</button>                    
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