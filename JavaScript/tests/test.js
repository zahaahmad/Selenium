const {By,Key,Builder, Browser} = require("selenium-webdriver");
require("chromedriver");


async function example(){
 
    var searchString = "test";

    //To wait for browser to build and launch properly
    let driver = await new Builder().forBrowser("chrome").build();

     //To fetch http://google.com from the browser with our code.
     await driver.get("http://google.com");
    
     await driver.findElement(By.id("L2AGLb")).click();
	
     //To send a search query by passing the value in searchString.
     await driver.findElement(By.name("q")).sendKeys(searchString);
	 //await driver.execute_script("document.getElementById('q').value='" + searchString + "'");
	 
	 //await driver.findElement(By.className("wM6W7d"[0])).click();
	await driver.sleep(500);
	 
	 await driver.findElement(By.className("RNmpXc")).click();
     //Verify the page title and print it
     var title = await driver.getTitle();
     console.log('Title is:',title);

     await driver.sleep(5000);

     //It is always a safe practice to quit the browser after execution
     await driver.quit();

}

example()