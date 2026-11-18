import { expect, test, type Page } from '@playwright/test';

async function openCanvas(page: Page, isMobile: boolean) {
  await page.getByTestId(isMobile ? 'mobile-nav-canvas' : 'nav-canvas').click();
  await expect(page.getByTestId('knowledge-canvas')).toBeVisible();
}

test('application hydrates and exposes the pathology learning workspace', async ({ page, isMobile }) => {
  await page.goto('/');
  await expect(page.getByTestId('launcher-home')).toBeVisible();
  await expect(page.getByText('Ω-PATH-STUDY').first()).toBeVisible();
  await expect(page.getByTestId(isMobile ? 'mobile-nav-pathology' : 'nav-pathology')).toBeVisible();
});

test('knowledge canvas restores the selected concept and zoom after reload', async ({ page, isMobile }) => {
  await page.goto('/');
  await expect(page.getByTestId('launcher-home')).toBeVisible();
  await openCanvas(page, isMobile);
  await expect(page.getByRole('heading', { name: 'GI Pathology' })).toBeVisible();

  await page.getByRole('button', { name: 'Stomach', exact: true }).click();
  await page.getByRole('button', { name: 'Zoom in' }).click();
  await expect.poll(async () => page.evaluate(() => {
    const raw = localStorage.getItem('omega-path-study:knowledge-canvas:v1');
    return raw ? JSON.parse(raw).selected : null;
  })).toBe('stomach');

  const beforeReload = await page.evaluate(() => JSON.parse(
    localStorage.getItem('omega-path-study:knowledge-canvas:v1') ?? '{}',
  ));
  expect(beforeReload.scale).toBeGreaterThan(0.72);

  await page.reload();
  await openCanvas(page, isMobile);
  await expect(page.getByRole('heading', { name: 'Stomach', exact: true })).toBeVisible();
  const afterReload = await page.evaluate(() => JSON.parse(
    localStorage.getItem('omega-path-study:knowledge-canvas:v1') ?? '{}',
  ));
  expect(afterReload.selected).toBe('stomach');
  expect(afterReload.scale).toBe(beforeReload.scale);
});

test('mobile layout does not introduce horizontal page overflow', async ({ page, isMobile }) => {
  test.skip(!isMobile, 'Mobile viewport regression');
  await page.goto('/');
  await expect(page.getByTestId('launcher-home')).toBeVisible();
  await openCanvas(page, isMobile);
  const dimensions = await page.evaluate(() => ({
    viewport: document.documentElement.clientWidth,
    document: document.documentElement.scrollWidth,
  }));
  expect(dimensions.document).toBeLessThanOrEqual(dimensions.viewport + 1);
});
