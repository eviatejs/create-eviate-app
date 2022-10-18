import { plugin } from 'bun';
import { Context, Engine } from 'eviate';
import fileRouter from './fileRouter';
const app: Engine = new Engine();

app.plugin.load(fileRouter)
app.plugin.run()

app.get('/', (_: Context) => {
  return {
    text: 'EviateJS - The next-gen backend web framework',
    status: 200,
    headers: {}
  };
});

app.listen();
