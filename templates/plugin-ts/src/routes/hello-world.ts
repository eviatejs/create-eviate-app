import { Context, EviateResponse } from "eviate";

export const route = {
    method: "GET",
    run: (ctx: Context):EviateResponse => {
        console.log(ctx.path)
        return {
            text: "Hello World",
            status: 200
        }
    }
}