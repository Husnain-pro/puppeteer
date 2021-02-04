const puppeteer = require('puppeteer');
// IIFE (Immediately Invoked Function Expression)
(async () => {
	// launch browser instance
	const browser = await puppeteer.launch({
		product: 'chrome',
		headless: false
	});
	// create new browser tab
	const page = await browser.newPage();
	// open desired page
	// await page.goto('https://www.facebook.com/groups/Pakistan.Freelancers.Group/permalink/2583699861895075');
	await page.goto('https://www.facebook.com');
	await page.type('#email', 'mlhlk1212@gmail.com', { delay: 30 });
	await page.type('#pass', 'mlhlk786', { delay: 30 });
	await page.click('button[type="submit"]');

	// let data = await page.evaluate(()=>{

	// })
	// console.log(page.type());
	// await page.click(button[(type = 'submit')], { delay: 30 });
	// await page.waitFor(15000);

	// close browser handle
	// await browser.close();
})();

// related Link
// https://levelup.gitconnected.com/automated-facebook-login-with-puppeteer-2a3b63437c3c
