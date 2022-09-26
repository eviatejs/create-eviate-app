export default function Logger(ctx) {
  console.log(`[${ctx.method}] request at path "${ctx.path}"`);
  return {
    ctx: ctx
  };
}
