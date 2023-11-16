//const LanderPage = require("../pageobjects/lander-page");

const Checkout = require ("../pageobjects/checkout");
const LanderPage = require("../pageobjects/lander");
const OneTimeOfferPage = require("../pageobjects/oto");
const MainPage = require("../pageobjects/page");


describe("Mobile Test", () => {
  it("Moble Device E2E Test", async () => {
    await MainPage.open('power/generator/weight-in-gold');
    await  LanderPage.addToCart()
    await  browser.pause(3000);
    await Checkout.first_name.setValue("Mobile");
    await Checkout.last_name.setValue("Test");
    await Checkout.billing_address.setValue("Noship");
    await Checkout.city.setValue("Noship");
    await Checkout.zipcode.setValue("11111");
    await Checkout.email.setValue("mobileauto@test.com");
    await Checkout.phone.setValue("5554443333");
    await Checkout.card_number.setValue("1172444444433333");
    await Checkout.cvv.setValue("111");
    await Checkout.selectState(2)
    await Checkout.selectMonth(0)
    await Checkout.selectYear(3)
    await Checkout.continueCheckout()
    await  browser.pause(5000);
    await OneTimeOfferPage.decline_all_one_time_offers()
    await expect(browser).toHaveUrlContaining("thankyou");
   
  });
});

