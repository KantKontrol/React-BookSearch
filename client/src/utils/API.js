import axios from "axios";


export default {
    searchGoogleBooks: function(searchTerms){
        return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${searchTerms}`);
    }
}


