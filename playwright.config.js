import { defineConfig } from '@playwright/test';
import { defineBddConfig } from 'playwright-bdd';

const testDir = defineBddConfig({
  features: 'testing/features/**/*.feature',
  steps: 'testing/steps/**/*.js',
});

export default defineConfig({
  testDir,
  reporter: 'html',
});