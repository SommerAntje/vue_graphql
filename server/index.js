const express = require('express')
const cors = require('cors')
const { buildSchema } = require('graphql')
const graphqlHTTP = require('express-graphql')
const schema = buildSchema(`
    type Query {
        language: String
    }
`)
const rootValue = {
    language: () => 'GraphQL hello world!'
}

const app = express()
app.use(cors())
app.use('/graphql', graphqlHTTP({
        rootValue,
        schema,
        graphiql: true
    }))
    // eslint-disable-next-line
app.listen(4000, () => console.log('Listening on 4000'))