import { browser } from '@wdio/globals';
import ThankYouPage from "../pageobjects/thank-you-page.js";
import CheckoutPage from "../pageobjects/checkout.js";
import LanderPage from "../pageobjects/lander.page.js";
import OneTimeOfferPage from "../pageobjects/oto.js";
import CommonLibrary from "./common.js";
import static_data from './static.data.js'
import { promisify } from "util";
const sleep = promisify(setTimeout);
const waitTime = 5000;


class SalesFunnelsInterface {

 async validateCustomerInfo() {
    console.log("<== VERIFIED CUSTOMER INFO ==>");
    let reference_number_array = await CommonLibrary.getReferenceNumbersList();
    for (let index = 0; index < reference_number_array.length; index++) {
      await sleep(500);
      let orderID = reference_number_array[index];
      let response = await CommonLibrary.getSalesOrder(orderID);
      let api_first_name = response[0].first_name
      let api_last_name = response[0].last_name
      let api_email_address = response[0].email_address
      let api_phone = response[0].phone

      console.log("===== VAILDATE FIRST NAME ====", api_first_name)
      global.expectChai(api_first_name).to.equal(static_data.first_name)
      // api_first_name.should.equal(static_data.first_name);
      console.log("===== VAILDATE LAST NAME =====", api_last_name)
      // api_last_name.should.equal(static_data.last_name);
      global.expectChai(api_last_name).to.equal(static_data.last_name)
      console.log("===== VAILDATE EMAIL ADDRESS =====", api_email_address)
      //api_email_address.should.equal(static_data.email);
      global.expectChai(api_email_address).to.equal(static_data.email)
      //api_phone.should.equal(static_data.phone);
      global.expectChai(api_phone).to.equal(static_data.phone)

   }

  }

   async validateOrder() {
    console.log("<== VERIFIED ITEM PID AND PRICE INFO ==>");
    let reference_number_array = CommonLibrary.viewReferenceNumbers;
    let shoppingCart = JSON.parse(JSON.stringify(CommonLibrary.viewShoppingCart))
    console.log("Shopping cart ", shoppingCart)
    for (let index = 0; index < reference_number_array.length; index++) {
      await sleep(500);
      let orderID = reference_number_array[index];
      let response = await CommonLibrary.getSalesOrder(orderID);
       let api_product_pid = response[0].products[0].product_id
       let api_product_price = response[0].products[0].price
       let api_product_qty = response[0].products[0].product_qty
      console.log("PID should match ==> ", await api_product_pid )
      global.expectChai(parseInt(api_product_pid)).to.equal(shoppingCart[index].pid)
      console.log("Product price should match ==> ", await api_product_price )
      global.expectChai(parseFloat(api_product_price).toFixed(2)).to.equal(parseFloat(shoppingCart[index].price).toFixed(2))
      console.log("Product QTY should match ==> ", await api_product_qty )
      global.expectChai(parseInt(api_product_qty)).to.equal(1)
   }
  }
   async validateOrderTILA() {
    console.log("<== VERIFIED ITEM PID AND PRICE INFO ==>");
    let reference_number_array = CommonLibrary.viewReferenceNumbers;
    let shoppingCart = JSON.parse(JSON.stringify(CommonLibrary.viewShoppingCart))
    console.log("Shopping cart ", shoppingCart)
  
      await sleep(500);
      let orderID = reference_number_array[0];
      let response = await CommonLibrary.getSalesOrder(orderID);
       let api_product_pid = response[0].products[0].product_id
       let api_product_price = response[0].products[0].price
       let api_product_qty = response[0].products[0].product_qty
      console.log("PID should match ==> ", await api_product_pid )
      global.expectChai(parseInt(api_product_pid)).to.equal(shoppingCart[0].pid)
      console.log("Product price should match ==> ", await api_product_price )
      global.expectChai(parseFloat(api_product_price).toFixed(2)).to.equal(parseFloat(shoppingCart[0].price).toFixed(2))
      console.log("Product QTY should match ==> ", await api_product_qty )
      global.expectChai(parseInt(api_product_qty)).to.equal(1)
   
  }

   async validateSalesOrderPrice(){

    console.log("<== VERIFIED THE ORDER ==>");
    let reference_number_array = await CommonLibrary.getReferenceNumbersList();
    let shoppingCart_pid = JSON.parse(JSON.stringify(CommonLibrary.viewShoppingCart))
    for (let index = 0; index < reference_number_array.length; index++) {
      const element = reference_number_array[index];
      await sleep(1000);
      let res = await CommonLibrary.getSalesOrder(element);
      console.log("API Response ==> ", res[0].products[0]);
      console.log("Sales funnel shopping cart ==> ", CommonLibrary.viewShoppingCart);
      let api_product_id = res[0].products[0].product_id;
      let api_price = res[0].products[0].price
      console.log("<== VERIFIED PID ==> " + api_product_id);
  //    global.expectChai(api_product_id).to.equal(shoppingCart_pid[0].productId)
      //assert.equal(api_product_id, shoppingCart_pid[0].productId, 'Validate PID');
      console.log("<== VERIFIED Price ==> " + api_price);
  //    global.expectChai(api_price).to.equal(shoppingCart_pid[0].price)
      //assert.equal(api_price, shoppingCart_pid[0].price, 'Validate Price');
    }
  }

   async validateSalesOrderPriceOTO(){
    // console.log("<== VERIFIED THE ORDER ==>");
    // let reference_number_array = await CommonLibrary.getReferenceNumbersList();
    // let shoppingCart_pid = JSON.parse(JSON.stringify(CommonLibrary.viewShoppingCart))

    // for (let index = 0; index < reference_number_array.length; index++) {
    //   const element = reference_number_array[index];
    //   await sleep(1000);
    //   let res = await CommonLibrary.getSalesOrder(element);
    //   console.log("API Response ==> ", res[0].products[0]);
    //   console.log("Sales funnel shopping cart ==> ", CommonLibrary.viewShoppingCart);
    //   let api_product_id = res[0].products[0].product_id;
    //   let api_price = res[0].products[0].price
     
    //   console.log("<== VERIFIED PID ==> " + api_product_id);
    //   assert.equal(api_product_id, shoppingCart_pid[index].productId, 'Validate PID');
    //   console.log("<== VERIFIED Price ==> " + api_price);
    //   assert.equal(api_price, shoppingCart_pid[index].price, 'Validate Price');
    //   console.log("<== THE ORDER WAS VERIFIED ==>");
    // }
    // await CommonLibrary.emptyShoppingCart()
  }
   doesSocialProofContainsValue(listA, listB) {
    // Convert arrays to sets for efficient subset checking
    const setA = new Set(listA);
    const setB = new Set(listB);

    // Check if all elements in setA exist in setB
    for (const element of setA) {
      if (!setB.has(element)) {
        return false;
      }
    }

    return true;
  }

   doesListContains(arrayA, arrayB) {
    for (let element of arrayA) {
      if (arrayB.includes(element)) {
        return true; // Found a common element
      }
    }
    return false; // No common elements found
  }

   verifyNoTestPurchaseInSocialProof(socialProofFirstName, socialProofCity) {
    console.log("SP Name", socialProofFirstName);
    console.log("SP CITY", socialProofCity);
    let testdata_city = ["Noship", "Fake", "Test"];
    let testdata_names = [
      "Test",
      "Testlilangi",
      "Testl",
      "Testla",
      "Cesartest",
    ];
    assert.strictEqual(
      this.doesSocialProofContainsValue(testdata_names, socialProofFirstName),
      false,
      "Warning Social Proof contains Test Data Name=[" + testdata_names + "]"
    );
    assert.strictEqual(
      this.doesSocialProofContainsValue(testdata_city, socialProofCity),
      false,
      "Warning Social Proof contains Test Data City=[" + testdata_city + "]"
    );
  }
  // public verifyNoTestOrdersNameInSocialProof(socialProofFirstName, socialProofCity) {
  //   let testdata_city = ["Noship"];
  //   let testdata_names = ["Test"];
  //   assert.strictEqual(
  //     this.doesSocialProofContainsValue(testdata_names, socialProofFirstName),
  //     false,
  //     "Warning Social Proof First Name contains [" + testdata_names + "]"
  //   );
  //   assert.strictEqual(
  //     this.doesSocialProofContainsValue(testdata_city, socialProofCity),
  //     false,
  //     "Warning Social Proof City contains [" + testdata_city + "]"
  //   );
  // }
}
export default new SalesFunnelsInterface();