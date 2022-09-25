import { Context, Engine } from 'eviate';

import router from './routes';
import Logger from './middlewares/basicLogger';

const app: Engine = new Engine();

app.use('before', Logger);

app.get('/', (_: Context) => {
  return {
    text: 'EviateJS - The next-gen backend web framework',
    status: 200,
    headers: {}
  };
});

app.mount(router);

app.listen();
