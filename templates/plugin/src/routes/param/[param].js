export const route = {
  method: 'GET',
  run: ctx => {
    console.log(ctx.path);
    return {
      json: { param: ctx.params.param },
      status: 200
    };
  }
};
