import React, { useEffect, useState } from "react";
import Jumbotron from "../components/Jumbotron";
import Results from "../components/Results";
import API from "../utils/API";


function SavedPage(){

    const [savedBooks, setSavedBooks] = useState([]);

    function useEffect(){

    }

    function handleDelete(id){
        
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