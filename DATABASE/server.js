const jsonServer = require('json-server');
const auth = require('json-server-auth');
const path = require('path');

const app = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, 'db.json'));
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000;

app.use(cors());

app.db = router.db;

app.use(middlewares);

app.use(auth);

app.use(router);

app.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});