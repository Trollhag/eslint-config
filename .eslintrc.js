'use strict'

module.exports = {
  overrides: [
    {
      files: ['**/*.ts'],
      extends: ['./typescript.js'],
    },
    {
      files: ['**/*.{js,mjs,cjs}'],
      extends: ['./javascript.js'],
    },
    {
      files: [
        '**/*.{test,spec}.ts',
        '**/__fixtures__/**/*.ts',
        '**/__tests__/**/*.ts',
      ],
      extends: ['./typescript.js'],
      env: { jest: true },
    },
    {
      files: [
        '**/*.{test,spec}.{js,cjs,mjs}',
        '**/__fixtures__/**/*.{js,cjs,mjs}',
        '**/__tests__/**/*.{js,cjs,mjs}',
      ],
      extends: ['./javascript.js'],
      env: { jest: true },
    },
  ],
}
