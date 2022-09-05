const fs = require("fs").promises;
const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    args: ['--use-gl=egl'],
    defaultViewport: false,
    //userDataDir: "./tmp",
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
    ignoreDefaultArgs: ['--disable-extensions'],
  });
  const page = await browser.newPage();

  //load cookies
  const cookiesString = await fs.readFile("./cookie.json");
  const cookies = JSON.parse(cookiesString);
  await page.setCookie(...cookies);

  await page.goto("https://members.helium10.com/");

  //await browser.close();
})();
