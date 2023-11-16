const MainPage = require("../../pageobjects/page");
const LanderPage = require("../../pageobjects/lander");
const Checkout = require("../../pageobjects/checkout");
const OneTimeOfferPage = require("../../pageobjects/oto");
let HEADER_ELEMENT;
let LABEL_TEXT;

describe("Split Test", () => {
  it("Send traffic to Control", async () => {
    await MainPage.open("power/generator/weight-in-gold");
    await browser.pause(1000);
    do {
      HEADER_ELEMENT = await $(
        "#app div.container.container--fluid.legacy > div:nth-child(1) h1> span"
      );
      LABEL_TEXT = await HEADER_ELEMENT.getText();
      console.log("Current Label = ", LABEL_TEXT);

      if (LABEL_TEXT != "Control") {
        await browser.refresh();
        await browser.pause(5000);
      }
    } while (LABEL_TEXT != "Control");

    await LanderPage.addToCart();
    await browser.pause(3000);
    await Checkout.first_name.setValue("Control Test");
    await Checkout.last_name.setValue("Test");
    await Checkout.billing_address.setValue("Noship");
    await Checkout.city.setValue("Noship");
    await Checkout.zipcode.setValue("11111");
    await Checkout.email.setValue("control@test.com");
    await Checkout.phone.setValue("5554443333");
    await Checkout.card_number.setValue("1172444444433333");
    await Checkout.cvv.setValue("111");
    await Checkout.selectState(2);
    await Checkout.selectMonth(0);
    await Checkout.selectYear(3);
    await Checkout.continueCheckout();
    await browser.pause(5000);
    // await OneTimeOfferPage.accept_all_one_time_offers();
    // await expect(browser).toHaveUrlContaining("thankyou");
  });
});
