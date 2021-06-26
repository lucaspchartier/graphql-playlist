import { gql } from "apollo-boost";

const getBooksQuery = gql`
    {
        books {
            name
            genre
            id
        }
    }
`

const getAuthorsQuery = gql`
    {
        authors {
            id
            name
            age
        }
    }
`

const addBookMutation = gql`
    mutation {
        addBook(name: "", genre: "", authorId: "") {
            name
            id
        }
    }
`

export { getBooksQuery, getAuthorsQuery, addBookMutation };