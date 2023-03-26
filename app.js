const Koa = require("koa");
const cors = require("@koa/cors");
const proxy = require("koa-proxies");
const app = new Koa();
const port = 3000;

app.use(cors());

app.use(
  proxy("/upload", {
    target: "https://freeimage.host/api/1/upload",
    changeOrigin: true,
    logs: true,
  })
);

app.listen(port);
console.log(`listening on port ${port}`);
