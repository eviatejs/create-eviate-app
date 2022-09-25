import { Router } from 'eviate';
import helloWorld from './hello-world';
import param from './param';

const router: Router = new Router();

router.get('/hello-world', helloWorld);

router.get('/param/:param', param);

export default router;
