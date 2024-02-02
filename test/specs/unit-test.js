const Checkout = require("../pageobjects/sales-funnels/checkout");
const LanderPage = require("../pageobjects/sales-funnels/lander");
const OneTimeOfferPage = require("../pageobjects/sales-funnels/oto");

describe("End-to-End Test", () => {
  it("Order Power generator", async () => {
    await LanderPage.open("PPG");
    await LanderPage.addToCart();
    await browser.pause(3000);
    await Checkout.first_name.setValue("Mobile");
    await Checkout.last_name.setValue("Test");
    await Checkout.billing_address.setValue("Noship");
    await Checkout.city.setValue("Noship");
    await Checkout.zipcode.setValue("11111");
    await Checkout.email.setValue("mobile.auto@test.com");
    await Checkout.phone.setValue("5554443333");
    await Checkout.card_number.setValue("1172444444433333");
    await Checkout.cvv.setValue("111");
    await Checkout.selectState(2);
    await Checkout.selectMonth(0);
    await Checkout.selectYear(3);
    await Checkout.continueCheckout();
    await browser.pause(5000);
    await OneTimeOfferPage.accept_all_one_time_offers();
    await expect(browser).toHaveUrlContaining("thankyou");
  });
});
