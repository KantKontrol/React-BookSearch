import React from "react";
import "./index.css";

function SearchForm(props){
    return (
        <form className="form-style">
            <div className="form-group">
            <label>{props.title}</label>
                <input className="form-control" id="searchInput" placeholder="Search Here" value={props.value} onChange={props.handleSearchChange} />
            </div>
            <button type="submit" className="btn btn-primary">Search</button>
        </form>
    );
}

export default SearchForm;