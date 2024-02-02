import { browser } from "@wdio/globals";
import axios from "axios";
import CheckoutPage from "../pageobjects/sales-funnels/checkout.js";
import OneTimeOfferPage from "../pageobjects/sales-funnels/oto.js";
import ThankYouPage from "../pageobjects/thank-you-page.js";

class CommonLibrary {
  salesAPI_BASEURL = "http://sales.uat.4patriots.net/pat/funnels/offers/";
  SHOPPING_CART = [];
  REFERNCE_NUMBERS = [];
  PID_LIST = [];

  async getReferenceNumbersList() {
    await expect(browser).toHaveUrlContaining("thankyou");

    let referenceIDs = await ThankYouPage.referenceNumberElements;
    for (const item of referenceIDs) {
      let input = await item.getText();
      var output = input.replace("Reference Number: #", "");
      this.REFERNCE_NUMBERS.push(output);
    }
    return this.REFERNCE_NUMBERS;
  }

  get viewReferenceNumbers() {
    return this.REFERNCE_NUMBERS;
  }

  get viewPIDlist() {
    return this.PID_LIST;
  }
  resetPIDList() {
    this.PID_LIST = [];
  }
  get viewShoppingCart() {
    return this.SHOPPING_CART;
  }

  addToShoppingCart(jsonObj) {
    this.SHOPPING_CART.push(jsonObj);
    console.log("NEW item added to shoping cart ==> ", JSON.stringify(jsonObj));
  }

  emptyShoppingCart() {
    this.SHOPPING_CART = [];
  }

  resetReferenceNumbers() {
    this.REFERNCE_NUMBERS = [];
  }

  async add_pid_to_list_oto() {
    let funnel_data = await OneTimeOfferPage.getFunnelProducts();
    for (let index = 0; index < funnel_data.length; index++) {
      this.PID_LIST.push(funnel_data[index].product.id);
    }
  }
  async add_pid_to_list_cop() {
    let funnel_data = await CheckoutPage.getFunnelProducts();
    for (let index = 0; index < funnel_data.length; index++) {
      this.PID_LIST.push(funnel_data[index].product.id);
    }
  }
  async getSalesOrder(orderID) {
    try {
      console.log("SALES FUNNEL REFRENCE ID " + orderID);

      let data = {
        order_id: [orderID],
      };
      const response = await axios.post(
        "https://five9.patriot123.com/pat/orders/view",
        data,
        {
          headers: {
            "Content-Type": "application/json",
            "Api-Key": "Imvu@89WGZ!d",
            Accept: "application/json",
          },
        }
      );
      return JSON.parse(JSON.stringify(response.data));
    } catch (error) {
      console.error(error);
    }
  }

  // async getFunnelData(endpoint) {
  //   try {
  //     console.log("GET FUNNEL DATA URL ==> ", " https://sales.uat.4patriots.net/PAT/funnels/offers/" + endpoint);
  //     const response = await axios.get(" https://sales.uat.4patriots.net/PAT/funnels/offers/" + endpoint);
  //     return  JSON.parse(JSON.stringify(response.data.data.published));
  //   } catch (error) {
  //     console.error(error);
  //   }
  //}
  async getFunnelData(endpoint) {
    // https://sales.uat.4patriots.net/PAT/page/power/freeze-drying-system/4week-kit

    let queryString = "?version=published&splitTestFunnel=";
    let baseURL = "https://sales.uat.4patriots.net/PAT/page/";
    try {
      console.log("GET FUNNEL DATA URL ==> ", baseURL + endpoint);
      const response = await axios.get(baseURL + endpoint);
      return JSON.parse(JSON.stringify(response.data.data));
    } catch (error) {
      console.error(error);
    }
  }

  async getSocialProofData(pidList) {
    const BASEURL = "https://sales.uat.4patriots.net/";
    const endpoint = "PAT/proof?";
    let querySting = "";

    pidList.forEach((pid) => {
      querySting += "productIds[]=" + pid + "&";
    });

    try {
      const response = await axios.get(BASEURL + endpoint + querySting);
      return await response.data.data;
    } catch (error) {
      console.error(error);
    }
  }

  async getFunnelData0(endpoint) {
    try {
      const response = await axios.get(this.salesAPI_BASEURL + endpoint);
      return await response.data.data.published;
    } catch (error) {
      console.error(error);
    }
  }
  async getPaymentPlanPrice(endpoint) {
    let funnelDataRaw = await this.getFunnelData(endpoint);
    let funnelDataJSON = await JSON.parse(JSON.stringify(funnelDataRaw));
    return this.extractValues(funnelDataJSON.offers, "price")[1];
  }

  async getFullPrice(endpoint) {
    let funnelDataRaw = await this.getFunnelData(endpoint);
    let funnelDataJSON = await JSON.parse(JSON.stringify(funnelDataRaw));
    return this.extractValues(funnelDataJSON.offers, "price")[0];
  }
  extractValues(jsonArray, keyToExtract) {
    // Check if the input is an array
    if (!Array.isArray(jsonArray)) {
      throw new Error("Input is not an array");
    }

    // Initialize an empty list to store the extracted values
    const extractedValues = [];

    // Loop through the array of objects
    for (const obj of jsonArray) {
      // Check if each element is an object
      if (typeof obj === "object" && obj !== null) {
        // Check if the keyToExtract exists in the object
        if (obj.hasOwnProperty(keyToExtract)) {
          extractedValues.push(obj[keyToExtract]);
        } else {
          // If the keyToExtract does not exist in the object, you can handle it accordingly
          // For example, you can push a default value or skip this object
          // extractedValues.push('DefaultValue');
        }
      } else {
        // If an element in the array is not an object, you can handle it accordingly
        // For example, you can skip this element or log an error
        // console.error('Invalid object:', obj);
      }
    }

    return extractedValues;
  }
  async getcurrentURLendpoint() {
    let results = [];
    let url = await browser.getUrl();
    results = url.split("/");
    return results[results.length - 1];
  }
  async getcurrentURLendpoint_2part() {
    let results = [];
    let url = await browser.getUrl();
    results = url.split("/");
    return results[results.length - 2] + "/" + results[results.length - 1];
  }
  async getcurrentURLendpoint_3part() {
    let results = [];
    let url = await browser.getUrl();
    results = url.split("/");
    return (
      results[results.length - 3] +
      "/" +
      results[results.length - 2] +
      "/" +
      results[results.length - 1]
    );
  }
  extractNumber(inputString) {
    // Use a regular expression to match and extract the numeric part
    const match = inputString.match(/\d+/);

    if (match) {
      // Extracted value found, return it
      return match[0];
    }

    return ""; // Return an empty string if no numeric value is found
  }
  extractPaymentValue(inputString) {
    // Use a regular expression to match the desired payment amount
    const match = inputString.match(/\$\d+/);

    if (match) {
      // Extracted value found, return it after removing the dollar sign
      const extractedValue = match[0].replace(/\$/g, "");
      return extractedValue;
    }

    return ""; // Return an empty string if the pattern is not found
  }

  extractValue(inputString) {
    // Use a regular expression to match and extract the numeric value
    const match = inputString.match(/\d+\.\d+/);

    if (match) {
      // Extracted value found, return it
      return match[0];
    }

    return ""; // Return an empty string if no numeric value is found
  }

  isJSONsEqual(json1, json2) {
    const keys1 = Object.keys(json1);
    const keys2 = Object.keys(json2);

    if (keys1.length !== keys2.length) {
      return false;
    }

    return keys1.every((key) => {
      const val1 = json1[key];
      const val2 = json2[key];

      if (typeof val1 === "object" && typeof val2 === "object") {
        return this.isJSONsEqual(val1, val2);
      }

      return val1 === val2;
    });
  }

  async verifyOrder(ORDERID, expectValues) {
    let res = await this.getSalesOrder(ORDERID);
    let response = JSON.parse(res);
    console.log("API Response ==> ", response[0].products[0]);
    console.log("Expected Response ==> ", expectValues);
    return this.isJSONsEqual(response[0].products[0], expectValues);
  }

  extractValuesFromArray(jsonArray, targetKey) {
    if (!Array.isArray(jsonArray)) {
      throw new Error("Input is not an array");
    }
    let result = [];
    function traverse(obj) {
      for (const key in obj) {
        if (typeof obj[key] === "object" && obj[key] !== null) {
          // If the current value is an object, recursively traverse it
          traverse(obj[key]);
        } else if (key === targetKey) {
          // If the current key matches the target key, add the value to the result array
          result.push(obj[key]);
        }
      }
    }
    for (const obj of jsonArray) {
      if (typeof obj === "object" && obj !== null) {
        // For each object in the array, apply the traversal function
        traverse(obj);
      }
    }
    return result;
  }
}
export default new CommonLibrary();
