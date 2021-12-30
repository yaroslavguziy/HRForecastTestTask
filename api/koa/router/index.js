const Router = require('koa-router');
const router = new Router();

const db = require('../../db/db');
const CITIES_TABLE = 'cities';

router.get('/cities/search', async ctx => {
  const { limit = 10, query = '' } = ctx.query;
  const data = await db
    .select('id', 'name')
    .from(CITIES_TABLE)
    .whereRaw('name ILIKE ?', [`%${query}%`])
    .orderBy('name', 'desc')
    .limit(limit);
  ctx.body = { data };
});

module.exports = router;
