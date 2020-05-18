import React from "react";
import "./index.css";
import SaveModal from "../SaveModal";

function ResultCard(props){
    return (
        <div className="col-10 mt-3 mx-auto result-card-style">
            <div className="row" style={{ marginBottom: 10 + "px"}}>
                <div className="col-6">
                    <h2 style={{ fontSize: 4 + "vw" }}>{props.title}</h2>
                    <h4 style={{ fontSize: 2 + "vw" }}>Written By: {props.auth}</h4>
                </div>
                <div className="col-2">
                        <div className="image">
                                <img src={props.img} className="img-fluid" alt="thumbnail" />
                        </div>
                </div>
                <div className="col-2"></div>
                <div className="col-2">
                
                        <a type="button" className="btn btn-secondary" target="_blank" rel="noopener noreferrer" href={props.link} >View</a>
                        {props.save ? <button type="button" className="btn btn-secondary" data-toggle="modal" data-target={"#" + props.id} onClick={() => props.handleSave(props)}>Save</button> : <button type="button" className="btn btn-secondary" onClick={() => props.handleDelete(props.id)}>Delete</button>}
                    
                </div>
                <SaveModal title="You saved a book!" img={props.img} objectTitle={props.title} author={props.auth} id={props.id} />
            </div>
            <div className="row">
                <div className="col-12">
                    <div className="description">{props.desc}</div> 
                </div>           
            </div>
        </div>
    );
}

export default ResultCard;