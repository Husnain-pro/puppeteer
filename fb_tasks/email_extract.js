const puppeteer = require('puppeteer');
(async () => {
	const browser = await puppeteer.launch({
		product: 'chrome',
		headless: false
	});
	let page = await browser.newPage();
	// await page.goto('https://www.facebook.com/groups/Pakistan.Freelancers.Group/permalink/2583699861895075');
	await page.goto('https://www.facebook.com/groups/Pakistan.Freelancers.Group/permalink/2583699861895075');
	setTimeout(function () {
		console.log('Hello');
	}, 3000);
	const data = await page.evaluate(() => {
		let val = [];
		val.push(document.querySelectorAll('div'));
		console.log(val);
		return val;
	});
	// let data = [];
	// data.push(await page.$('div'));
	// const options = await page.$$eval('div', (divs) => divs.length);

	console.log(data);
	// console.log(data);
	// await page.click(await page.type('#login_form'));
	// letawait page.evaluate(() => {
	// 	let data = document.querySelectorAll('a');
	// 	// console.log(data[1]);
	//     return data[1];
	// });
	// let data = await page.evaluate(() => {
	// 	let comment = document.querySelectorAll('div').forEach((val, num) => {
	// 		let arr = [];
	// 		arr.push(val.getAttribute('style'));
	// 		if (arr[0] == 'text-align: start;') {
	// 			console.log(val.textContent);
	// 		}
	// 	});
	// 	console.log(comment);
	// });
	// console.log(data);
})();
