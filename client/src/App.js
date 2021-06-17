import React, { Component } from "react";
import ApolloClient from "apollo-boost";

// components
import BookList from "./components/BookList";

// Apollo client setup

class App extends Component {
    render() {
        return (
            <div id="main">
                <h1>Reading List</h1>
                <BookList/>
            </div>
        );
    }
}
  
export default App;