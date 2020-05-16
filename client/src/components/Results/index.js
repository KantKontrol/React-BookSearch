import React from "react";
import "./index.css"
import ResultCard from "../ResultCard";

function Results(props){
    return (
        <div className="col-12">
            <div className="result-style">
                <h1 className="display-4">Results</h1>
                {
                    props.books ? props.books.map(e => {
                        return <ResultCard />
                    }) : <h2>No Results Available</h2>
                }
            </div>
        </div>
    );
}

export default Results;