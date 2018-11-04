const findJob = (id, context) => {
  return context.collection('jobs').find({'id': id}).toArray()
    .then(result => {
      console.log(result[0])
      return result[0]
    })
}

// Resolvers
const resolvers = {
  Query: {
    job: (_, { id }, context) => findJob(id, context)
  }
};

module.exports = resolvers;