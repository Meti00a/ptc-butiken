import { defineConfig } from '@playwright/test';
import { defineBddConfig } from 'playwright-bdd';

const testDir = defineBddConfig({
    features: 'testing/features/**/*.feature',
    steps: 'testing/steps/**/*.js',
});

export default defineConfig({
    testDir,
    outputDir: 'testing/results',
    reporter: [['html', { outputFolder: 'playwright-report', open: 'never' }]],
    use: {
        video: 'off',
        screenshot: 'only-on-failure',
        trace: 'on-first-retry',
    },
});