import { By, Builder } from "selenium-webdriver";
import assert from "assert";
import "chromedriver";


async function GoogleSearchTest(){
 
    var searchString = "test";

    //To wait for browser to build and launch properly
    let driver = await new Builder().forBrowser("chrome").build();

     //To fetch http://google.com from the browser with our code.
     await driver.get("http://google.com");
    
     await driver.findElement(By.id("L2AGLb")).click();

     const searchInput = driver.findElement(By.name("q"));
     await searchInput.sendKeys(searchString);
     await searchInput.sendKeys('\n');

     await driver.findElement(By.id("result-stats")).isDisplayed();

     const results = await driver.findElements(By.className("g"));
     assert(results.length > 4);

     //It is always a safe practice to quit the browser after execution
     await driver.quit();

}

GoogleSearchTest()