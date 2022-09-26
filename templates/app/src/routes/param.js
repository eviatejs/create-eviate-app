export default function (ctx) {
  console.log(ctx.path);

  return {
    json: { param: ctx.params.param },
    status: 200
  };
}
