import { Context, Engine } from 'eviate';
import fileRouter from './fileRouter';
const app: Engine = new Engine();

fileRouter.handler(app);

app.get('/', (_: Context) => {
  return {
    text: 'EviateJS - The next-gen backend web framework',
    status: 200,
    headers: {}
  };
});

app.listen();
