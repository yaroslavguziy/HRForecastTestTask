const { port } = require('../envConfig');
const router = require('./router/index');

const Koa = require('koa');

const app = new Koa();
app.use(router.routes());
app.use(router.allowedMethods());

app.listen(port, () => console.log(`server start on port ${port}`));
