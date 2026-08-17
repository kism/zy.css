const { test, expect } = require("@playwright/test");

test("every font in zy.css loads", async ({ page }) => {
  const bad = [];
  page.on("response", (r) => {
    if (r.url().endsWith(".woff2") && r.status() !== 200)
      bad.push(`${r.status()} ${r.url()}`);
  });
  page.on("requestfailed", (r) => bad.push(`failed ${r.url()}`));

  await page.goto("/test/index.html");
  await page.evaluate(() => document.fonts.ready);

  const faces = await page.evaluate(() =>
    [...document.fonts].map(
      (f) => `${f.family} ${f.weight} ${f.style} ${f.status}`,
    ),
  );

  expect(bad).toEqual([]);
  expect(faces.filter((f) => !f.endsWith("loaded"))).toEqual([]);
  expect(faces.length).toBe(8);
});
