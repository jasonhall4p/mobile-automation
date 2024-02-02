class CheckoutPage {
  get first_name() {
    return $("#checkoutForm  #firstName");
  }
  get last_name() {
    return $("#checkoutForm  #lastName");
  }
  get billing_address() {
    return $("#checkoutForm  #address");
  }
  get city() {
    return $("#checkoutForm  #city");
  }
  get zipcode() {
    return $("#checkoutForm  #zip");
  }
  get email() {
    return $("#checkoutForm   #email");
  }
  get phone() {
    return $("#checkoutForm  #phone");
  }
  get card_number() {
    return $("#checkoutForm  #cardNumber");
  }
  get cvv() {
    return $("#checkoutForm  #CVV2");
  }
  // get stateInput() {return $("#checkoutForm > div > div.row.pt-3.no-gutters > div.row.no-gutters.align-start > div:nth-child(8) > div > div > div");}
  get stateInput() {return $("#checkoutForm > div > div.row.pt-3.no-gutters > div.row.no-gutters.align-start > div:nth-child(8) > div > div > div");}
  
  get states() {return $$( "#app div.v-menu__content.theme--light.menuable__content__active div[class='v-list-item__content']");
  }
  get ccYearInput() {return $("#checkoutForm div.pr-2.pl-0.col-sm-3.col-4 div.v-select__slot div.v-input__append-inner");}

  get years() { return $$("#app > div.v-menu__content.theme--light.menuable__content__active > div > div");}

  get ccMonthInput() {return $("#checkoutForm div.pl-1.pr-1.col-sm-5.col-8 div.v-select__slot div.v-input__append-inner");}

  get months() { return $$("#app > div.v-menu__content.theme--light.menuable__content__active > div > div div[class='v-list-item__content']");}
  
  get checkoutBtn() {return $("#checkoutForm  #checkoutButton");}

  async selectState(index) {
    await this.stateInput.click();
    await browser.pause(1000);
    await this.states[index].click();
  }

  async selectYear(index) {
    await this.ccYearInput.click();
    await browser.pause(1000);
    await this.years[index].$("div[class='v-list-item__content']").click();
  }

  async selectMonth(index) {
    await this.ccMonthInput.click();
    await browser.pause(1000);
    await this.months[index].click();
  }

  async continueCheckout() {
    await this.checkoutBtn.click();
  }

}

module.exports = new CheckoutPage();
