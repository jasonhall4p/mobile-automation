//const LanderPage = require("../pageobjects/lander-page");

const Page = require("../pageobjects/page");

describe("Mobile Test", () => {
  it("E2E Test", async () => {

    Page.open('power/generator/weight-in-gold')

 //   await LanderPage.open("PPG");
    // Open Funnel
    // await browser.url(
    //   "https://products.uat.4patriots.net/power/generator/weight-in-gold"
    // );
    // Add to Cart Button
    await $("button[data-testid*='OrderCTAButton-'] .button-content").click();
  // Fill out Checkout form
    await $("#checkoutForm  #firstName").setValue("Test");
    await $("#checkoutForm  #lastName").setValue("Test");
    await $("#checkoutForm  #address").setValue("Noship");
    await $("#checkoutForm  #city").setValue("Noship");
    await $("#checkoutForm  #zip").setValue("11111");
    await $("#checkoutForm   #email").setValue("automation@test.com");
    await $("#checkoutForm  #phone").setValue("5552223333");
    await $("#checkoutForm  #cardNumber").setValue("1172444444433333");
    await $("#checkoutForm  #CVV2").setValue("111");
    //STATE
    await $("#checkoutForm > div > div.row.pt-3.no-gutters > div.row.no-gutters.align-start > div:nth-child(8) > div > div > div").click();
    await browser.pause(1000);
    let states = await $$("#app div.v-menu__content.theme--light.menuable__content__active div[class='v-list-item__content']");
    await states[0].click()
    await browser.pause(1000);
    //CC month
    // await $("#checkoutForm div.pl-1.pr-1.col-sm-5.col-8 div.v-select__slot div.v-input__append-inner").click();
    // await browser.pause(1000);
    // let months = await $$("div[id*='list-'] div[class='v-list-item__content']");
    // await months[1].click();
    //CC year
    await $(
      "#checkoutForm div.pr-2.pl-0.col-sm-3.col-4 div.v-select__slot div.v-input__append-inner"
    ).click();
    let years = await $$(
      "#app > div.v-menu__content.theme--light.menuable__content__active > div > div"
    );
    await years[3].$("div[class='v-list-item__content']").click();

    await browser.pause(5000);
  });
});
