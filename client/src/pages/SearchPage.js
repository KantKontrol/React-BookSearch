import  React, { useState } from "react";
import Jumbotron from "../components/Jumbotron";
import SearchForm from  "../components/SearchForm";
import Results from "../components/Results";
import API from "../utils/API";
import { PromiseProvider } from "mongoose";

function SearchPage() {

    const [search, setSearch] = useState("");
    const [books, setBooks] = useState([]);

    function handleSearchChange(e) {
        let { value } = e.target;
        setSearch(value);
    }

    function searchGoogleBooks(e){
        e.preventDefault();

        API.searchGoogleBooks(search).then(res => {
            setBooks(res.data.items);
            console.log(books);
        })
        .catch(err => {
            console.log(err);
        });
    }

    function handleSave(data){
        console.log(data);
    }
    
    
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-12">
                    <Jumbotron title="(React) Google Books Search" lead="Search for and Save book of interest" />
                </div>
            </div>
            
            <div className="row">
                <div className="col-12">
                    <SearchForm title="Book Search" value={search} handleSearchChange={handleSearchChange} searchButton={searchGoogleBooks} />
                </div>
            </div>

            <div className="row">
                <Results books={books} handleSave={handleSave} />
            </div>
        
        </div>
    );
}

export default SearchPage;