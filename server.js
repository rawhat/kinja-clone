var koa = require('koa');
var app = new koa();
var path = require('path');

var convert = require('koa-convert');

var body = convert(require('koa-bodyparser')());
app.use(body);

var views = require('koa-views');

app.use(views(path.join(__dirname, 'views'), {
  map: {
    pug: 'pug'
  }
}));

app.use(convert(require('koa-static')(path.join(__dirname, 'static'))));

var router = require('koa-router')();

router.get('/', async ctx => {
    console.log('in here!');
    this.body = await ctx.render('index.pug');
});

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(3333);