
const { promisify } = require("util");
const sleep = promisify(setTimeout);
const Page = require('./page')

const TEST_DATA = {
    SPLIT: {
      name: "Power Generator",
      page_title: "NEW & Improved Solar Wonder  - 4Patriots",
      endpoint: "generator/weight-in-gold",
      catagory: "/power/",
    },
  
    QA: {
      name: "4-Week Survival Food Kit",
      page_title: "Delicious Survival Meals - 4Patriots",
      endpoint: "qa-test-funnel/good-for-25-years",
      catagory: "/food/",
    },
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
    PPG3: {
      name: "Patriot Power Generator w/ FREE 3-Month Food Kit",
      page_title: "FREE 3-Month Food Kit >> - 4Patriots",
      endpoint: "generator-3mo/backup-power",
      catagory: "/power/",
    },
    PPGS: {
      name: "Patriot Power Generator 1800 & FREE Sidekick",
      page_title: "- 4Patriots",
      endpoint: "generator-b/endless-energy?splittest=142-290",
      catagory: "/power/",
    },
    PPS: {
      name: "Patriot Power Sidekick",
      page_title: "4Patriots",
  
      endpoint: "power-sidekick/safe-power",
      catagory: "/power/",
    },
    PPC: {
      name: "Patriot Power Cell",
      page_title: "- 4Patriots",
      endpoint: "cell/pocket-sized-power-plant",
      catagory: "/power/",
    },
    B4G1: {
      name: "Patriot Power Cell B4G1",
      page_title: "4Patriots",
      endpoint: "power-cell-b4g1/solar-event",
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
    FBR3MO: {
      name: "Patriot Power Cell B4G1",
      page_title: "4Patriots",
      endpoint: "3month-fbr/calorie-boost",
      catagory: "/food/",
    },
    ONEYEAR: {
      name: "1-Year Survival Food Kit Sales Funnel",
      page_title: "Designed to Last 25 Years - 4Patriots",
      endpoint: "1year/holy-grail",
      catagory: "/food/",
    },
    TWOWEEK: {
      name: "2-Week Survival Food Kit Sales Funnel",
      page_title: 'Our #1 "Stockpile Starter" - 4Patriots',
      endpoint: "2-week-kit/secret-to-survival",
      catagory: "/food/",
    },
    THREEMONTH: {
      name: "3-Month Food Kit",
      page_title: "Best Variety & Great Value! - 4Patriots",
      endpoint: "3month/back-in-stock",
      catagory: "/food/",
    },
    DISC3MO: {
      name: "3 Month Discount",
      page_title: "- 4Patriots",
      endpoint: "discount-3month/peace-of-mind",
      catagory: "/food/",
    },
   
    BOGO3MO: {
      name: "3 Month BOGO - Buy 1, Get 1 57% off",
      page_title: "57% OFF Your Second Kit - 4Patriots",
      endpoint: "3month-bogo/clearing-house",
      catagory: "/food/",
    },
    FOURWEEK: {
      name: "4-Week Survival Food Kit",
      page_title: "Delicious Survival Meals - 4Patriots",
      endpoint: "4week/good-for-25-years",
      catagory: "/food/",
    },
    B3G14K: {
      name: "4-Week B3G1 - Main Offer",
      page_title: "FREE Survival Food - 4Patriots",
      endpoint: "4week-b3g1/mouth-watering-food",
      catagory: "/food/",
  
    },
    GARD4K: {
      name: "4 Week Garden Presidents Day 2021 Promo",
      page_title: "FREE Heirloom Seeds With Your Food Kit? - 4Patriots",
      endpoint: "4week-garden/peace-of-mind",
      catagory: "/food/",
    },
    FBSS3MO: {
      name: "-Month + FBR & Survival Shakes",
      page_title: "3-Month Survival Food Kit - 4Patriots",
      endpoint: "3month-fbr/calorie-boost",
      catagory: "/food/",
    },
    CHR: {
      name: "Premium Massage Chair",
      page_title: "- Patriot Health Alliance",
      endpoint: "massage-chair/zero-gravity",
      catagory: "/hardgoods/",
    },
    AQB: {
      name: "Patriots Pure Aqua Bright",
      page_title: "NEW 2-in-1 Water Bottle? - 4Patriots",
      endpoint: "patriot-pure-aqua-bright/water-sterilizer",
      catagory: "/purify/",
    },
    UWF: {
      name: "Ultimate Water Filter",
      page_title: "4Patriots",
      endpoint: "outdoor-filtration-cooler/water-powerhouse",
      catagory: "/purify/",
    },
  
    OFC: {
      name: "Ultimate Water Filter",
      page_title: "4Patriots",
      endpoint: "ultimate-water-filter/safe-and-clean",
      catagory: "/purify/",
    },
    BLD: {
      name: "Blender Mega Lander",
      page_title: "Powerful, Portable Blender - Patriot Health Alliance",
      endpoint: "blender/portable-wonder",
      catagory: "/hardgoods/",
    },
  
    RFG: {
      name: "Rapid Fire Micro Massage Gun",
      page_title: "- Patriot Health Alliance",
      endpoint: "micro-massager/mini-massager",
      catagory: "/hardgoods/",
    },
    SAU: {
      name: "Sauna Blanket",
      page_title: "- Patriot Health Alliance",
      endpoint: "sauna-blanket/all-day-energy",
      catagory: "/hardgoods/",
    },
    SWI: {
      name: "Vital Swing Optimization",
      page_title: "The Vital Swing Exerciser - Patriot Health Alliance",
      endpoint: "vital-swing/increase-circulation",
      catagory: "/hardgoods/",
    },
    AOX: {
      name: "ActivOX",
      page_title: "- Patriot Health Alliance",
      endpoint: "activox/secret-organ",
      catagory: "/health/",
    },
    DFP: {
      name: "Digestive Freedom Plus",
      page_title: "- Patriot Health Alliance",
      endpoint: "digestive/stomach-problems",
      catagory: "/health/",
    },
    FLEX: {
      name: "Patriot Flex",
      page_title: "- Patriot Health Alliance",
      endpoint: "flex/joint-pain-breakthrough",
      catagory: "/health/",
    },
    PGR: {
      name: "Patriot Power Greens",
      page_title: "- Patriot Health Alliance",
      endpoint: "greens/military-tested",
      catagory: "/health/",
    },
    PGRFREE: {
      name: "Patriot Power Greens Sample",
      page_title: "Get Your FREE Greens! - Patriot Health Alliance",
      endpoint: "greens-sample/secret-green-drink",
      catagory: "/health/",
    },
    PGRBOGO: {
      name: "Patriot Power Greens BOGO MVF",
      page_title: "- Patriot Health Alliance",
      endpoint: "greens-bogo/checkout",
      catagory: "/health/",
    },
    JMF: {
      name: "Joint & Muscle Freedom",
      page_title: "- Patriot Health Alliance",
      endpoint: "jmf/joint-pain",
      catagory: "/health/",
    },
    GOLD: {
      name: "Patriot Gold",
      page_title: "- Patriot Health Alliance",
      endpoint: "patriot-gold/golden-secret",
      catagory: "/health/",
    },
    PPR: {
      name: "Patriot Power Reds",
      page_title: "- Patriot Health Alliance",
      endpoint: "reds/beating-fatigue",
      catagory: "/health/",
    },
  };
class LanderPage{
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
    } else if (productCode == "PPS") {
      this.product = TEST_DATA.PPS;
    } else if (productCode == "PPC") {
      this.product = TEST_DATA.PPC;
    } else if (productCode == "FRG") {
      this.product = TEST_DATA.FRG;
    } else if (productCode == "FRZ") {
      this.product = TEST_DATA.FRZ;
    } else if (productCode == "PPG") {
      this.product = TEST_DATA.PPG;
    } else if (productCode == "PPG2KX") {
      this.product = TEST_DATA.PPG2KX;
    } else if (productCode == "B4G1") {
      this.product = TEST_DATA.B4G1;
    } else if (productCode == "1YR") {
      this.product = TEST_DATA.ONEYEAR;
    }
    else if (productCode == "2WK") {
      this.product = TEST_DATA.TWOWEEK;
    }
    else if (productCode == "3MO") {
      this.product = TEST_DATA.THREEMONTH;
    }
    else if (productCode == "3MOSKT") {
      this.product = TEST_DATA.SKT3MO;
    }
    else if (productCode == "4WK") {
      this.product = TEST_DATA.FOURWEEK;
    }
    else if (productCode == "B3G14K") {
      this.product = TEST_DATA.B3G14K;
    }
    else if (productCode == "4WKGARD") {
      this.product = TEST_DATA.GARD4K;
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