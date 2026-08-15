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

// Reduced-motion path skips the gate entirely; otherwise open it with a scroll.
await page.evaluate(() => window.scrollTo(0, 60));
await page.waitForTimeout(2200); // let the doors finish opening

// Find the intro section and scroll it into view, centered.
const el = await page.$('[aria-label="XORA intro statement"]');
if (el) {
  await el.scrollIntoViewIfNeeded();
  // nudge so the section sits comfortably in frame
  await page.evaluate(() => window.scrollBy(0, -40));
  await page.waitForTimeout(500);
  const box = await el.boundingBox();
  await page.screenshot({
    path: `shots/${mode}-intro.png`,
    clip: {
      x: 0,
      y: Math.max(0, box.y - 60),
      width: page.viewportSize().width,
      height: Math.min(page.viewportSize().height, box.height + 120),
    },
  });
  console.log(`captured ${mode}-intro @ y=${Math.round(box.y)} h=${Math.round(box.height)}`);
} else {
  console.log("intro section not found");
}

await browser.close();
console.log("done");
