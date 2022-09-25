import { Context, EviateResponse } from 'eviate';

export default function (ctx: Context): EviateResponse {
  console.log(ctx.path);
  return {
    json: { param: ctx.params.param },
    status: 200
  };
}
