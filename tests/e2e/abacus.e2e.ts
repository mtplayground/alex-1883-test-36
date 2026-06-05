import { expect, test } from '@playwright/test';

test('moves beads, updates the displayed value, and resets to zero', async ({
  page,
}) => {
  await page.goto('/');

  const currentValue = page.getByLabel('Current value');
  const clearButton = page.getByRole('button', { name: 'Clear' });

  await expect(currentValue).toContainText('0');
  await expect(clearButton).toBeDisabled();

  await page
    .getByRole('button', { name: /Rod 9 heaven bead \(inactive\)/ })
    .click();
  await expect(currentValue).toContainText('5');
  await expect(clearButton).toBeEnabled();

  await page
    .getByRole('button', {
      name: /Rod 9 earth bead 2 of 4 \(inactive\)/,
    })
    .click();
  await expect(currentValue).toContainText('7');

  await clearButton.click();
  await expect(currentValue).toContainText('0');
  await expect(clearButton).toBeDisabled();
  await expect(
    page.getByRole('button', { name: /Rod 9 heaven bead \(inactive\)/ }),
  ).toHaveAttribute('aria-pressed', 'false');
  await expect(
    page.getByRole('button', {
      name: /Rod 9 earth bead 2 of 4 \(inactive\)/,
    }),
  ).toHaveAttribute('aria-pressed', 'false');
});
