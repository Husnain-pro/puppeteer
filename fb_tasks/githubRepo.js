const puppeteer = require('puppeteer');

(async () => {
	const browser = await puppeteer.launch({
		product: 'chrome',
		headless: false
	});
	const page = await browser.newPage();
	await page.goto('https://github.com/Husnain-pro?tab=repositories', { waitUntil: 'networkidle2' });

	await page.waitForSelector('#user-repositories-list li');
	var reposit = await page.evaluate(() => {
		var repos = document.querySelectorAll('#user-repositories-list li h3 a');
		return Array.from(repos).map((repo) => {
			return {
				name: repo.innerText,
				url: repo.href
			};
		});
	});
	console.log(reposit);
})();
