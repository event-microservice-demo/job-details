// GraphQL schema definition
const { gql } = require('apollo-server-express')

const typeDefs = gql`
  type Query { 
    jobByUrn(urn: String): Job
  }
  type Salary {
    amount: Int!
    currency: String!
  }
  type Location {
    city: String!
    state: String
    country: String!
  }
  type Company { 
    urn: String!
    name: String!
    location: Location
    description: String
  }
  type Job { 
    urn: String! 
    title: String!  
    company: Company
    location: Location
    description: String
    level: String
    industry: String
    estimatedSalary: String
    salary: Salary
  }
`;

module.exports = typeDefs;