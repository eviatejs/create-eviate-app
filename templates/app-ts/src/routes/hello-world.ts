import type { Context, EviateResponse } from 'eviate';

export default function (ctx: Context): EviateResponse {
  console.log(ctx.path);

  return {
    text: 'Hello World',
    status: 200
  };
}
