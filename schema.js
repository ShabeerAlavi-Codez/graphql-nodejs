const { GraphQLObjectType, GraphQLSchema, GraphQLString } = require('graphql');

// Define a UserType
const UserType = new GraphQLObjectType({
  name: 'User',
  fields: () => ({
    id: { type: GraphQLString },
    username: { type: GraphQLString },
    email: { type: GraphQLString },
  }),
});

// Define a myType
const myType = new GraphQLObjectType({
    name: 'MyData',
    fields: () => ({
      id: { type: GraphQLString },
      username: { type: GraphQLString },
      email: { type: GraphQLString },
    }),
  });

// Root Query
const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    user: {
      type: UserType,
      args: { id: { type: GraphQLString } },
      resolve(parent, args) {
        // Resolve function to fetch user data
        // For simplicity, we'll return hardcoded data
        return {
          id: args.id,
          username: 'johndoe',
          email: 'johndoe@example.com',
        };
      },
    },
    myData: {
        type: myType,
      args: { id: { type: GraphQLString } },
      resolve(parent, args) {
        // Resolve function to fetch user data
        // For simplicity, we'll return hardcoded data
        return {
          id: args.id,
          username: 'alllllvi',
          email: 'al@example.com',
        };
      },

    }
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});
