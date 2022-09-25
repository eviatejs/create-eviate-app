import minimist from 'minimist';
import prompts from 'prompts';
import { yellow, blue, cyan, red, reset } from 'kolorist';

import { formatTargetDir } from './utils';

const argv = minimist<{
  t?: string;
  template?: string;
}>(process.argv.slice(2), { string: ['_'] });

const cwd = process.cwd();

// Constants
interface TemplateVariant {
  name: string;
  display: string;
  color: (str: string | number) => string;
}

interface Template {
  name: string;
  display: string;
  color: (str: string | number) => string;
  variants: TemplateVariant[];
}

const templates: Template[] = [
  {
    name: 'app',
    display: 'App',
    color: yellow,
    variants: [
      {
        name: 'app',
        display: 'JavaScript',
        color: yellow
      },
      {
        name: 'app-ts',
        display: 'TypeScript',
        color: blue
      }
    ]
  },
  {
    name: 'plugin',
    display: 'Plugin',
    color: cyan,
    variants: [
      {
        name: 'plugin',
        display: 'JavaScript',
        color: yellow
      },
      {
        name: 'plugin-ts',
        display: 'TypeScript',
        color: blue
      }
    ]
  }
];

const allTemplates = templates
  .map(f => (f.variants && f.variants.map(v => v.name)) || [f.name])
  .reduce((a, b) => a.concat(b), []);

const defaultProjectName = 'eviate-project';

// Function to scaffold project
export async function scaffoldProject() {
  const argTargetDir = formatTargetDir(argv._[0]);
  const argTemplate = argv.template || argv.t;

  let targetDir = argTargetDir || defaultProjectName;

  let result: prompts.Answers<'projectName' | 'template' | 'variant'>;

  try {
    result = await prompts(
      [
        {
          type: argTargetDir ? null : 'text',
          name: 'projectName',
          message: reset('Project name:'),
          initial: defaultProjectName,
          onState: state => {
            targetDir = formatTargetDir(state.value) || defaultProjectName;
          }
        },
        {
          name: 'template',
          initial: 0,
          type:
            argTemplate && allTemplates.includes(argTemplate) ? null : 'select',
          choices: templates.map(template => {
            const templateColor = template.color;

            return {
              title: templateColor(template.display || template.name),
              value: template
            };
          }),
          message:
            typeof argTemplate === 'string' &&
              !allTemplates.includes(argTemplate)
              ? reset(
                `"${argTemplate}" isn't a valid template. Please choose from below: `
              )
              : reset('Select the template type:')
        },
        {
          name: 'variant',
          type: (template: Template) =>
            template && template.variants ? 'select' : null,
          choices: (template: Template) =>
            template.variants.map(variant => {
              const variantColor = variant.color;

              return {
                title: variantColor(variant.display || variant.name),
                value: variant.name
              };
            }),
          message: reset('Select a variant:')
        }
      ],
      {
        onCancel: () => {
          throw new Error(red('✖') + ' Operation cancelled');
        }
      }
    );
  } catch (cancelled: any) {
    console.log(cancelled.message);
    return;
  }

  const { projectName, template, variant } = result;

  console.log(`
  ${yellow('Project name:')} ${projectName}
  ${yellow('Framework:')} ${template.display}
  ${yellow('Variant:')} ${variant.display}
  `);
}
