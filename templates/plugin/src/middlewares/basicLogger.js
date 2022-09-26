export const middleware = {
    name: "basicLogger",
    position: "before",
    run: (ctx) => {
        console.log(`[${ctx.method}] request at path "${ctx.path}"`);
        return {
            ctx:ctx
        }
    }
}