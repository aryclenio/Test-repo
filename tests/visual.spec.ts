import { test, expect } from '@playwright/test';

test.describe('Visual Regression Tests', () => {
  test('home page looks correct', async ({ page }) => {
    // Go to the Next.js app home page
    await page.goto('/');

    // Wait for the page content to be stable
    await page.waitForLoadState('networkidle');

    // Perform the visual regression screenshot comparison
    await expect(page).toHaveScreenshot('home-page.png', {
      fullPage: true,
    });
  });
});
