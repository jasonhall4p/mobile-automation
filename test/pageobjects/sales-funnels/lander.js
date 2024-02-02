const { promisify } = require("util");
const sleep = promisify(setTimeout);
const Page = require("./page");

const TEST_DATA = {
  BUG: {
    name: "Bugout Solar Lantern",
    page_title: "Solar Bug Zapper - 4Patriots",
    endpoint: "bugout-solar-lantern/bug-zapper",
    catagory: "/power/",
  },
  PPG2KX: {
    name: "Patriot Power Generator 2000X",
    page_title: "Solar Generator 2000X - 4Patriots",
    endpoint: "generator-2k/2x-weight-in-gold",
    catagory: "/power/",
  },
  PPG: {
    name: "Patriot Power Generator 1800",
    page_title: "Solar Wonder - 4Patriots",
    endpoint: "generator/weight-in-gold",
    catagory: "/power/",
  },
 
  PPC: {
    name: "Patriot Power Cell",
    page_title: "- 4Patriots",
    endpoint: "cell/pocket-sized-power-plant",
    catagory: "/power/",
  },
  
  FRG: {
    name: "Freedom Fridge",
    page_title: "4Patriots",
    endpoint: "freedom-fridge/food-safe-haven",
    catagory: "/power/",
  },
  FRZ: {
    name: "Home Freeze-Drying System",
    page_title: "NEW At-Home Freeze Drying System - 4Patriots",
    endpoint: "freeze-drying-system/home-freeze-drying-system",
    catagory: "/power/",
  },
 
  ONEYEAR: {
    name: "1-Year Survival Food Kit Sales Funnel",
    page_title: "Designed to Last 25 Years - 4Patriots",
    endpoint: "1year/holy-grail",
    catagory: "/food/",
  },
  
};
class LanderPage {
  product = "";
  baseurl = "";

  get currentProduct() {
    return this.product;
  }
  get productTitle() {
    return this.product.page_title;
  }

  get addToCartBtn() {
    return $("button[data-testid*='OrderCTAButton-'] .button-content");
  }

  get paymentLink() {
    return $("span[data-testid*='OrderCTAPayment-']");
  }
  async validatePage() {
    await sleep(2000);

    if ((await util.getcurrentURLendpoint()) == "expired") {
      throw new Error(this.product.name + " Event Has Ended!");
    }
    await expect(browser).toHaveTitleContaining(this.product.page_title);
  }

  async open(productCode) {
    if (productCode == "BUG") {
      this.product = TEST_DATA.BUG;
    } else if (productCode == "PPC") {
      this.product = TEST_DATA.PPC;
    } else if (productCode == "FRG") {
      this.product = TEST_DATA.FRG;
    } else if (productCode == "FRZ") {
      this.product = TEST_DATA.FRZ;
    } else if (productCode == "PPG") {
      this.product = TEST_DATA.PPG;
    } else if (productCode == "1YR") {
      this.product = TEST_DATA.ONEYEAR;
    } 
    let endpoint = this.product.catagory + this.product.endpoint;
    return await Page.open(endpoint);
  }

  async addToCart() {
    this.validatePage();
    await this.addToCartBtn.click();
  }

  async addPaymentPlan() {
    this.validatePage();
    await this.paymentLink.click();
  }
}
module.exports = new LanderPage();
