describe('angularjs banking', function() {
  it('loginPage', function() {
    browser.get('http://www.way2automation.com/angularjs-protractor/banking/#/login');
    browser.sleep(2500);
  });
  
  it('verifyCurrencyType', function() {
	   element(by.buttonText("Customer Login")).click();
	   browser.sleep(1500);
	   var select = element(by.model('custId'));
	   select.$('[value="2"]').click();
	   browser.sleep(2000);
	   element(by.buttonText("Login")).click();
	   browser.sleep(2000);
	   
	   
	  });
  
  
  it('InitialTraction', function() {
	   element(by.buttonText("Customer Login")).click();
	   browser.sleep(1500);
	   var select = element(by.model('custId'));
	   select.$('[value="2"]').click();
	   browser.sleep(2000);
	   element(by.buttonText("Login")).click();
	   browser.sleep(2000);
	   element(by.buttonText("Transactions")).click();
	   browser.sleep(2000);
	   
	   
	  });
  it('DepositMoney', function() {
	   element(by.buttonText("Customer Login")).click();
	   browser.sleep(1500);
	   var select = element(by.model('custId'));
	   select.$('[value="2"]').click();
	   browser.sleep(2000);
	   element(by.buttonText("Login")).click();
	   browser.sleep(2000);
	   var select = element(by.model('accountNo'));
	   select.$('[value="number:1006"]').click();
	   browser.sleep(2000);
	   element(by.buttonText("Deposit")).click();
	   browser.sleep(1000);
	   element(by.model("amount")).sendKeys(2000);
	   browser.sleep(2000);
	   // element(by.buttonText("Deposit")).click();
	   element(by.className("btn-default")).click();
	   browser.sleep(3000);
  });
  
  it('TransationAfterDeposit', function() {
	   element(by.buttonText("Customer Login")).click();
	   browser.sleep(1500);
	   var select = element(by.model('custId'));
	   select.$('[value="2"]').click();
	   browser.sleep(2000);
	   element(by.buttonText("Login")).click();
	   browser.sleep(2000);
	   var select = element(by.model('accountNo'));
	   select.$('[value="number:1006"]').click();
	   browser.sleep(2000);
	   element(by.buttonText("Deposit")).click();
	   browser.sleep(1000);
	   element(by.model("amount")).sendKeys(2000);
	   browser.sleep(2000);
	   element(by.className("btn-default")).click();
	   browser.sleep(3000);
	   element(by.buttonText("Transactions")).click();
	   browser.sleep(3000);
  });
  
    it('withDrawError', function() {
	   element(by.buttonText("Customer Login")).click();
	   browser.sleep(1500);
	   var select = element(by.model('custId'));
	   select.$('[value="2"]').click();
	   browser.sleep(2000);
	   element(by.buttonText("Login")).click();
	   browser.sleep(2000);
	   var select = element(by.model('accountNo'));
	   select.$('[value="number:1006"]').click();
	   browser.sleep(2000);
	   element(by.buttonText("Deposit")).click();
	   browser.sleep(1000);
	   element(by.model("amount")).sendKeys(2000);
	   browser.sleep(2000);
	   element(by.className("btn-default")).click();
	   browser.sleep(3000);
	   element(by.buttonText("Withdrawl")).click();
	   browser.sleep(2000);
	   element(by.model("amount")).sendKeys(2001);
	   browser.sleep(2000);
	   element(by.className("btn-default")).click();
	   browser.sleep(3000);
	  
 });
  it('withDrawSuccess', function() {
	   element(by.buttonText("Customer Login")).click();
	   browser.sleep(1500);
	   var select = element(by.model('custId'));
	   select.$('[value="2"]').click();
	   browser.sleep(2000);
	   element(by.buttonText("Login")).click();
	   browser.sleep(2000);
	   var select = element(by.model('accountNo'));
	   select.$('[value="number:1006"]').click();
	   browser.sleep(2000);
	   element(by.buttonText("Deposit")).click();
	   browser.sleep(1000);
	   element(by.model("amount")).sendKeys(2000);
	   browser.sleep(2000);
	   element(by.className("btn-default")).click();
	   browser.sleep(3000);
	   element(by.buttonText("Withdrawl")).click();
	   browser.sleep(2000);
	   element(by.model("amount")).sendKeys(1000);
	   browser.sleep(2000);
	   element(by.className("btn-default")).click();
	   browser.sleep(3000);
	  
});
  it('TransationAfterWithdraw', function() {
	   element(by.buttonText("Customer Login")).click();
	   browser.sleep(1500);
	   var select = element(by.model('custId'));
	   select.$('[value="2"]').click();
	   browser.sleep(2000);
	   element(by.buttonText("Login")).click();
	   browser.sleep(2000);
	   var select = element(by.model('accountNo'));
	   select.$('[value="number:1006"]').click();
	   browser.sleep(2000);
	   element(by.buttonText("Deposit")).click();
	   browser.sleep(1000);
	   element(by.model("amount")).sendKeys(2000);
	   browser.sleep(2000);
	   element(by.className("btn-default")).click();
	   browser.sleep(3000);
	   element(by.buttonText("Withdrawl")).click();
	   browser.sleep(2000);
	   element(by.model("amount")).sendKeys(1000);
	   browser.sleep(2000);
	   element(by.className("btn-default")).click();
	   browser.sleep(3000);
	   element(by.buttonText("Transactions")).click();
	   browser.sleep(3000);
	  
});
  it('InitialTraction', function() {
	   element(by.buttonText("Customer Login")).click();
	   browser.sleep(1500);
	   var select = element(by.model('custId'));
	   select.$('[value="2"]').click();
	   browser.sleep(2000);
	   element(by.buttonText("Login")).click();
	   browser.sleep(2000);
	   element(by.buttonText("Transactions")).click();
	   browser.sleep(2000);
	   
	   
	  });
  
  
});