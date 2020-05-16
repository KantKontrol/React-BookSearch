import React from "react";
import "./index.css"
import ResultCard from "../ResultCard";

function Results(props){
    let books = props.books;
    console.log(books);
    return (
        <div className="col-12">
            <div className="result-style">
                <h1 className="display-4">Results</h1>
                {
                    books ? books.map(e => {
                        let data = e.volumeInfo;

                        return <ResultCard key={e.id} id={e.id} title={data.title} auth={data.authors} img={data.imageLinks.thumbnail} desc={data.description} link={data.infoLink} handleSave={props.handleSave}/>
                    }) : <h2>No Results Available</h2>
                }
            </div>
        </div>
    );
}

export default Results;