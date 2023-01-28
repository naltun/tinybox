import { Application, Context, Router, Status } from "https://deno.land/x/oak/mod.ts";
import { welcomeMsg } from "./server/index.ts";

const port = 8000;
const app = new Application();
const router = new Router();

router.get("/", (ctx: Context) => {
  ctx.response.body = welcomeMsg;
  ctx.response.type = "text";
  ctx.response.status = Status.OK;
});

app.use(router.routes());
app.use(router.allowedMethods());

console.log(`Listening on localhost:${port}`);
await app.listen({ port: port });
