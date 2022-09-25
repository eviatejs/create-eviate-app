import { Context, EviateMiddlewareResponse } from 'eviate';

export default function Logger(ctx: Context): EviateMiddlewareResponse {
  console.log(`[${ctx.method}] request at path "${ctx.path}"`);
  return {
    ctx: ctx
  };
}
