import { expect } from '@playwright/test';
import { createBdd } from 'playwright-bdd';

const { Given, When, Then } = createBdd();

Given('I am on home page', async ({ page }) => {
    await page.goto('http://localhost:5173/');
});

Given('I am on the page for {string}', async ({ page }, name) => {
    await page.goto('http://localhost:5173/');

    const card = page.locator('a.card').filter({
        has: page.locator('p', { hasText: new RegExp(`^${name}$`) })
    });

    await card.first().click();

    /*
    if (name === 'Alakazam') {
        await page.goto('http://localhost:5173/card/base1-1');
    }
    */
});

When('I click on the card {string}', async ({ page }, name) => {
    await page.getByRole('link', { name }).first().click();
});

When('I click on the menu link {string}', async ({ page }, name) => {
    await page.locator('.meny a').getByText(name, { exact: true }).click();
});

Then('I see the description {string}', async ({ page }, description) => {
    await expect(page.getByText(description)).toBeVisible();
});