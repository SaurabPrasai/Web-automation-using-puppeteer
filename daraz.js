const puppeteer=require('puppeteer');

//write the product name you want to search
const product='laptop'
const main=async()=>{
    const browser=await puppeteer.launch({headless:true})
    const page=await browser.newPage();
    //set the page dimension
    await page.setViewport({width:1600,height:1040})
    //go to daraz
    await page.goto('https://www.daraz.com.np/#')
    //searching the content
    await page.type('.search-box__input--O34g',product);
   await page.keyboard.press('Enter')
   //waiting for an searched item
   await page.waitForSelector('.info-panel--qjUGt')
    // //saving picture
    await page.screenshot({path:`${product}.png`,fullPage:true})
    // browser.close();
}
main();

//if the picture doesn't contain product price again run the code