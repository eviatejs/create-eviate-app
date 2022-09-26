import { Context, EviateMiddlewareResponse } from 'eviate';
export const middleware = {
  name: 'basicLogger',
  position: 'before',
  run: (ctx: Context): EviateMiddlewareResponse => {
    console.log(`[${ctx.method}] request at path "${ctx.path}"`);
    return {
      ctx: ctx
    };
  }
};
