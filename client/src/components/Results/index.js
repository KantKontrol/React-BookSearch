import React from "react";
import "./index.css"
import ResultCard from "../ResultCard";

function Results(props){
    let books = props.books;
    return (
        <div className="col-12">
            <div className="result-style">
                <h1 className="display-4">Results</h1>
                {
                    books ? books.map(e => {
                        let data;

                        if(props.save){
                            data = {
                                id: e.id,
                                title: e.volumeInfo.title,
                                authors: e.volumeInfo.authors,
                                img: e.volumeInfo.imageLinks.thumbnail,
                                desc: e.volumeInfo.description,
                                link: e.volumeInfo.infoLink
                            };
                        }
                        else {
                            data = {
                                id: e._id,
                                title: e.title,
                                authors: e.authors,
                                img: e.image,
                                desc: e.description,
                                link: e.link
                            };
                        }

                        return <ResultCard key={data.id} id={data.id} title={data.title} auth={data.authors} img={data.img} desc={data.desc} link={data.link} save={props.save} handleSave={props.handleSave} handleDelete={props.handleDelete}/>
                    }) : <h2>No Results Available</h2>
                }
            </div>
        </div>
    );
}

export default Results;