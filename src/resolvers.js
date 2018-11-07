const findJob = (urn, context) => {
  return context.collection('jobs').find({'urn': urn}).toArray()
    .then(result => {
      console.log(result[0])
      return result[0]
    })
}

const findCompany = (urn, context) => {
  return context.collection('companies').find({'urn': urn}).toArray()
    .then(result => {
      console.log(result[0])
      return result[0]
    })
}


// Resolvers
const resolvers = {
  Query: {
    jobByUrn: (_, { urn }, context) => findJob(urn, context)
  },
  Job: {
    company: (parent, _, context) => findCompany(parent.companyId, context)
  }
};

module.exports = resolvers;