import { FileSystemRouter } from "eviate-plugin";

export default new FileSystemRouter({
    routerDir: "/src/routes",
    middlewareDir: "/src/middlewares",
    log: false
})