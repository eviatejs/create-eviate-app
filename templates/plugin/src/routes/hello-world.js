
export const route = {
    method: "GET",
    run: (ctx) => {
        console.log(ctx.path)
        return {
            text: "Hello World",
            status: 200
        }
    }
}