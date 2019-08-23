# graphql-example

### Project setup with node and npm
```
npm install
```

### Install Axios
```
axios: needed for making the request which includes the query

if not installed so far run also:
npm install axios
```

### Install Cors
```
cors: allows restricted resources on a web page to be requested from another domain outside the domain

npm install cors
```

### Install Express graphQl server
```
express: a web app framework for node.js - used to run graphQl API server 
express and express-graphql allow response to HTTP requests

npm install express express-graphql graphql --save
```

### Starting the Vue app
```
run this command from directory root in one terminal
to start the server:

npm run serve
> go to http://localhost:8080 

```

### Start GraphQL server and use GraphiQL
```
run this command from the server directory in another terminal
in order to use buildSchema function with GraphiQL

node index.js 

> go to http://localhost:4000/graphql and run the desired query {yourQuery}

```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
