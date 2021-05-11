const graphql = require("graphql");

const { GraphQLObjectType, GraphQLString } = graphql;

const BookType = new GraphQLOBjectType({
    name: "Book",
    fields: () => ({
        id: { type: GraphQLString }
    })
});