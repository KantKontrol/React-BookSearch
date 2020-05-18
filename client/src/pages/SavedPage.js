import React, { useEffect, useState } from "react";
import Jumbotron from "../components/Jumbotron";
import Results from "../components/Results";
import API from "../utils/API";


function SavedPage(){

    const [savedBooks, setSavedBooks] = useState([]);

    useEffect(() => {
        loadSavedBooks();
    }, [savedBooks]);

    function loadSavedBooks(){
        API.getSavedBooks().then(res => {
            setSavedBooks(res.data);
        });
    }

    function handleDelete(id){
        API.deleteBook(id).then(res => {
            console.log(res);
            loadSavedBooks();
        });
    }

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-12">
                    <Jumbotron title="(React) Google Books Search" lead="Search for and Save book of interest" />
                </div>
            </div>

            <div className="row">
                <Results books={savedBooks}  save={false} handleDelete={handleDelete}/>
            </div>
        </div>
    );
}


export default SavedPage;