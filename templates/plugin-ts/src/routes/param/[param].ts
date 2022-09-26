import { Context, EviateResponse } from 'eviate';

export const route = {
  method: 'GET',
  run: (ctx: Context): EviateResponse => {
    console.log(ctx.path);
    return {
      json: { param: ctx.params.param },
      status: 200
    };
  }
};
