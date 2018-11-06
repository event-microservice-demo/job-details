const findJob = (id, context) => {
  return context.collection('jobs').find({'id': id}).toArray()
    .then(result => {
      console.log(result[0])
      return result[0]
    })
}

const findCompany = (id, context) => {
  return context.collection('companies').find({'id': id}).toArray()
    .then(result => {
      console.log(result[0])
      return result[0]
    })
}


// Resolvers
const resolvers = {
  Query: {
    jobById: (_, { id }, context) => findJob(id, context)
  },
  Job: {
    company: (parent, _, context) => findCompany(parent.companyId, context)
  }
};

module.exports = resolvers;