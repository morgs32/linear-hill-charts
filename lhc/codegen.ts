
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: 'https://api.linear.app/graphql',
  documents: 'src/**/*.graphql',
  generates: {
    'src/utils/linear.ts': {
      plugins: ['typescript', 'typescript-operations', 'typescript-graphql-request'],
      config: {
        rawRequest: true
      },
    }
  }
};

export default config;
