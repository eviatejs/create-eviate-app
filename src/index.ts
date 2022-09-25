import { scaffoldProject } from './cli';

scaffoldProject().catch((e) => {
    console.error(e)
})
