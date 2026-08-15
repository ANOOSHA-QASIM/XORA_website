import { chromium } from "playwright-core";
import { mkdirSync } from "node:fs";

mkdirSync("shots", { recursive: true });

const exe =
  "C:\\Users\\Faiz\\AppData\\Local\\ms-playwright\\chromium-1208\\chrome-win64\\chrome.exe";

const browser = await chromium.launch({
  executablePath: exe,
  args: ["--no-sandbox", "--force-color-profile=srgb"],
});

const mode = process.argv[2] || "desktop";
const isMobile = mode === "mobile";
const page = await browser.newPage({
  viewport: isMobile
    ? { width: 390, height: 844 }
    : { width: 1440, height: 900 },
  deviceScaleFactor: 1,
  isMobile,
  hasTouch: isMobile,
});

await page.goto("http://localhost:3000/", { waitUntil: "networkidle" });
// give framer-motion a tick to attach scroll listeners
await page.waitForTimeout(400);

// Gate track = 220vh, scrollable distance = 120vh.
// progress p -> scrollY = p * 120vh = p * 1.2 * viewportHeight
const vh = page.viewportSize().height;
const scrollFor = (p) => Math.round(p * 1.2 * vh);

const frames = [0, 0.25, 0.5, 0.75, 1];
for (const p of frames) {
  await page.evaluate((y) => window.scrollTo(0, y), scrollFor(p));
  await page.waitForTimeout(500);
  const label =
    p === 0
      ? "closed"
      : p === 0.25
      ? "opening"
      : p === 0.5
      ? "half"
      : p === 0.75
      ? "mostly"
      : "open";
  await page.screenshot({ path: `shots/${mode}-${label}.png` });
  console.log(`captured ${mode}-${label} @ scroll=${scrollFor(p)}px`);
}

await browser.close();
console.log("done");
