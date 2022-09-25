
export default function (ctx) {
  console.log(ctx.path);

  return {
    text: 'Hello World',
    status: 200
  };
}
