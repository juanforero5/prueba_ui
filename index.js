const {Browser, Builder, By} = require("selenium-webdriver");
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const start = async () => {
    let driver = null;
    try {
        driver = await new Builder().forBrowser(Browser.CHROME).build();
        await driver.get("https://www.selenium.dev/selenium/web/web-form.html");

        await delay(2000);
        const textArea = await driver.findElement(By.css('textarea[name="my-textarea"]'));
        await textArea.sendKeys("Anita lava la tina");

        await delay(2000);
        const dropDown = await driver.findElement(By.css('select[name="my-select"]'));
        await dropDown.click();

        await delay(2000);
        const escoger = await driver.findElement(By.css('option[value="3"]'));
        await escoger.click();

        await delay(2000);
        const openColor = await driver.findElement(By.css('[name="my-colors"]'));
        await openColor.click();

        await delay(2000);
        const escogeColor = await driver.findElement(By.css('input[type="color"][name="my-colors"]'));
        await escogeColor.sendKeys("#20A722");

        await delay(2000);
        const setDate = await driver.findElement(By.css('input[name="my-date"]'));
        await setDate.click();
        await setDate.sendKeys("08/26/1970");

        await delay(2000);
        const checkBox = await driver.findElement(By.css('input[id="my-check-2"]'));
        await checkBox.click();

        await delay(2000);
        const submit = await driver.findElement(By.css('button[type=submit]'));
        await submit.click();

        await delay(2000);
        const formTextCapture = await driver.findElement(By.xpath('//*[contains(text(), "Form submitted")]')).getText();
        console.log(formTextCapture);
        const receivedTextCapture = await driver.findElement(By.xpath('//*[contains(text(), "Received!")]')).getText();
        console.log(receivedTextCapture);


    } catch (error) {
    } finally {
            if(driver) {
                // await driver.quit;
            }
        }
    }

start();
