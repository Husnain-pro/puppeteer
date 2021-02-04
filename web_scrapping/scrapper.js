const puppeteer = require('puppeteer');
async function scrapProduct(url) {
	const browser = await puppeteer.launch();
	const page = await browser.newPage();
	await page.goto(url);

	// const [el] = await page.$x('/html/body/section[2]/div[2]/div[2]/div/main/div[1]/ul/li[1]/a');
	// const src = await el.getProperty('href');
	// const srcText = await src.jsonValue();
	// console.log({ srcText });
	let data;
	data = await page.evaluate(() => {
		const links = document.querySelectorAll('.key');

		let source = [];
		for (let i = 0; i < links.length; i++) {
			// source.push(i);
			try {
				console.log(i);
				source.push(links[i].getAttribute('href'));
			} catch (error) {
				console.error(error);
			}
			// console.log(source);
		}
		// source = document.querySelector(`main>div>ul>li:nth-child(2)>a`).getAttribute('href');
		// console.log(source);
		return source;
	});
	console.log(data);
}

let pages_num;
for (let i = 0; i < 26; i++) {
	pages_num = (i + 10).toString(36).toUpperCase();
	let web_url = `https://www.medicines.org.uk/emc/browse-companies/${pages_num}`;
	async function caller() {
		try {
			await scrapProduct(web_url);
		} catch (error) {
			console.error(error);
		}
	}
	caller();
}
