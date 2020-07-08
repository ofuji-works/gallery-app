const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
  });

  const page = await browser.newPage();
  await page.goto("https://paypaymall.yahoo.co.jp/store/zozo/top/");

  const querySelector =
    "#main > div.Column.Column-type1 > div.Column_main > div.Partition.store_storeRecommend.Partition-separate > div > ul > li";

  const data = await page.$eval(querySelector, (item) => {
    console.log(item);
    return item;
  });

  await browser.close();

  console.log(data);
})();
