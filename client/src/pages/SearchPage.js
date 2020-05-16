import  React, { useState } from "react";
import Jumbotron from "../components/Jumbotron";
import SearchForm from  "../components/SearchForm";
import Results from "../components/Results";

function SearchPage() {

    const [search, setSearch] = useState("");

    function handleSearchChange(e) {
        let { value } = e.target;
        setSearch(value);
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
                    <SearchForm title="Book Search" value={search} handleSearchChange={handleSearchChange} />
                </div>
            </div>

            <div className="row">
                <Results />
            </div>
        
        </div>
    );
}

export default SearchPage;