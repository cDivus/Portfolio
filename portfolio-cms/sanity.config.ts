import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { schema } from './schemaTypes';

export default defineConfig({
  name: 'default',
  title: 'Portfolio CMS',

  projectId: '224t8t6l',
  dataset: 'production',

  plugins: [structureTool()],

  schema: schema,
});
