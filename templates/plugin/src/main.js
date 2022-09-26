import fileRouter from './fileRouter';
import { Engine } from 'eviate';
const app = new Engine();

fileRouter.handler(app)

app.get('/', (ctx) => {
  return {
    text: 'EviateJS - The next-gen backend web framework',
    status: 200,
    headers: {}
  };
});


app.listen();
