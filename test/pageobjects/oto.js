// import { promisify } from "util";
// const sleep = promisify(setTimeout);
// const waitTime = 5000;

class OneTimeOfferPage{

    get noThanksLink() {
        return $("a[id='noThanksLink']");
    }
    get clickToAcceptButton() {
        return $(
            "#app button[data-testid*='OrderCTAPaymentButton-'] .button-content"
        );
    }
    get pickMyPlanButton() {
        return $("#app button[data-testid*='OrderCTAButton-'] .button-content");
    }
    async clickNoThanks() {
        await this.noThanksLink.click();
      }
    
       async clickToAccept() {
        await this.clickToAcceptButton.click();
      }
    
      async clickPickMyPlan() {
        await this.pickMyPlanButton.click();
      }
      async decline_all_one_time_offers() {
        do {
          console.log("Current URL ==>  ", await browser.getUrl());
          if (await this.noThanksLink.isDisplayed()) {
            await this.clickNoThanks();
          }
          await  browser.pause(5000);
          
        } while ((await this.getcurrentURLendpoint()) != "thankyou");
      }
      async accept_all_one_time_offers() {
    
        do {
          console.log("Current URL ==>  ", await browser.getUrl());
    
          //Check if the Accept button displays on the screeen
          if (await this.clickToAcceptButton.isDisplayed()) {
            await this.clickToAccept();
          }
          //Check if the Product gallery displays on the screeen
          else if (await $("div[data-cy='showCaseButton'] span").isDisplayed()) {
            await this.pick_Hail_Mary(0);
          }
    
          else {
            await this.clickPickMyPlan();
          }
          await  browser.pause(5000);
        } while ((await this.getcurrentURLendpoint()) != "thankyou");
    
      }
    async getcurrentURLendpoint() {
        let results = [""];
        let url = await browser.getUrl();
        results = url.split("/");
        return results[results.length - 1];
    }

}
module.exports = new OneTimeOfferPage()