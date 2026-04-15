const jsonServer = require('json-server');
const cors = require('cors'); 
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const auth = require('json-server-auth'); 

server.use(cors()); 

server.use(middlewares);
server.use(auth);

server.use(router);

const PORT = process.env.PORT || 3000;
server.listen(PORT, "0.0.0.0", () => {
  console.log(`JSON Server is running on port ${PORT}`);
});