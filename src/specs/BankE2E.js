var addCustomer = require('../pages/AddCustomer.js')
var openAccount = require('../pages/OpenAccount.js')
var deleteCustomer = require('../pages/Customers.js')
var loginUser = require('../pages/Transactions.js')
var depositPage = require('../pages/Deposit.js')
var withdrawPage = require('../pages/Withdrawl.js')


describe("banking login", function() {
   it("AddCustomer", function() {
    browser.get('http://www.way2automation.com/angularjs-protractor/banking/#/login');
    element(by.buttonText("Bank Manager Login")).click();
    browser.sleep(3000);
    element(by.buttonText("Add Customer")).click();
    
    addCustomer.enterFirstName("mouni");
    addCustomer.enterLastName("poli");
    addCustomer.enterPostCode(4562);
    addCustomer.clickAddCustomerButton();
    browser.sleep(2000);
    addCustomer.acceptPopup();
    browser.sleep(4000);
    
  });
  
  
  it("To oppen Account for doller", function() {
	    //browser.get('http://www.way2automation.com/angularjs-protractor/banking/#/login');
	    //element(by.buttonText("Bank Manager Login")).click();
	    //browser.sleep(3000);
	    element(by.buttonText("Open Account")).click();
	    
	    openAccount.clickCustomer(2);
	    browser.sleep(3000); 
	    
	    openAccount.clickCurrency("Dollar");
	    browser.sleep(2000); 
	    
	    openAccount.clickProcessButton();
	    browser.sleep(2000); 
	    
	    addCustomer.acceptPopup();
	    browser.sleep(2000);
	    
  });
  
  
  it("To oppen Account for pound", function() {
	    //browser.get('http://www.way2automation.com/angularjs-protractor/banking/#/login');
	    //element(by.buttonText("Bank Manager Login")).click();
	    //browser.sleep(3000);
	    //element(by.buttonText("Open Account")).click();
	    
	    openAccount.clickCustomer(2);
	    browser.sleep(1000); 
	    
	    openAccount.clickCurrency("Pound");
	    browser.sleep(2000); 
	    
	    openAccount.clickProcessButton();
	    browser.sleep(2000); 
	    
	    addCustomer.acceptPopup();
	    browser.sleep(1000);
	    
});
  
  
       it("To oppen Account for rupees", function() {
	   /* browser.get('http://www.way2automation.com/angularjs-protractor/banking/#/login');
	    element(by.buttonText("Bank Manager Login")).click();
	    browser.sleep(3000);
	    element(by.buttonText("Open Account")).click();*/
	    
	    openAccount.clickCustomer(2);
	    browser.sleep(1000); 
	    
	    openAccount.clickCurrency("Rupee");
	    browser.sleep(2000); 
	    
	    openAccount.clickProcessButton();
	    browser.sleep(2000); 
	    
	    addCustomer.acceptPopup();
	    browser.sleep(1000);
	    
});
  
        it("To delete Customer", function() {
	   // browser.get('http://www.way2automation.com/angularjs-protractor/banking/#/login');
	   // element(by.buttonText("Bank Manager Login")).click();
	   // browser.sleep(3000);
	    element(by.buttonText("Customers")).click();
	    
	    deleteCustomer.enterCustomerName("Harry");
	    browser.sleep(3000);
	    deleteCustomer.clickDeleteCustomerButton();
	    browser.sleep(2000);
	   
	  
	    
	  });
        it("For Customer Login", function() {
			browser.get('http://www.way2automation.com/angularjs-protractor/banking/#/login');
			expect(element.all(by.className("btn")).get(0).getText(), "Customer Login");
			expect(element.all(by.className("btn")).get(1).getText(), "Bank Manager Login");
			
			
			element(by.buttonText("Customer Login")).click();
			browser.sleep(3000);
			
			loginUser.clickName("2");
			browser.sleep(2000);

			element(by.buttonText("Login")).click();
			browser.sleep(2000);
			
			element(by.model('accountNo')).$('[value="number:1004"]').click();
			browser.sleep(500);
			var dollar=element(by.xpath("html/body/div[3]/div/div[2]/div/div[2]/strong[3]"));
			expect(dollar.getText()).toBe("Dollar");
			
			element(by.model('accountNo')).$('[value="number:1005"]').click();
			browser.sleep(500);
			var pound=element(by.xpath("html/body/div[3]/div/div[2]/div/div[2]/strong[3]"));
			expect(pound.getText()).toBe("Pound");
			
			element(by.model('accountNo')).$('[value="number:1006"]').click();
			browser.sleep(500);
			var rupees=element(by.xpath("html/body/div[3]/div/div[2]/div/div[2]/strong[3]"));
			expect(rupees.getText()).toBe("Rupee");
		});
		
		//expect(dollar.getText()).toBe("Dollar");
		xit("InitialTraction", function() {
			// browser.get('http://www.way2automation.com/angularjs-protractor/banking/#/login');
			//element(by.buttonText("Customer Login")).click();
			//browser.sleep(3000);

			//loginUser.clickName("2");
			//browser.sleep(2000);

			//loginUser.clickLoginButton();
			// browser.sleep(2000);

			loginUser.clickTransactionButton();
			browser.sleep(2000);
			
			$$('table tr').count().then(function countRows(count) {
			    if (count > 1) {
			    	console.log('table not empty')
			    } else {
			    	console.log('table empty')
			    }
			  });
	
		});

		xit("DepositMoney", function() {
			/* browser.get('http://www.way2automation.com/angularjs-protractor/banking/#/login');
			 element(by.buttonText("Customer Login")).click();
			 browser.sleep(3000);
			 
			 loginUser.clickName("2");
			 browser.sleep(2000);
			 
			 loginUser.clickLoginButton();
			 browser.sleep(2000);*/
			
			loginUser.clickBackButton();
			browser.sleep(2000);

			loginUser.clickAccountNumber("number:1006");
			browser.sleep(2000);

			depositPage.clickDepositButton();
			browser.sleep(2000);

			depositPage.enterDepositAmount(2000);
			browser.sleep(2000);

			depositPage.clickDepositDefaultButton();
			browser.sleep(2000);
			
			element(by.model('accountNo')).$('[value="number:1006"]').click();
			browser.sleep(500);
			var balance=element(by.xpath("html/body/div[3]/div/div[2]/div/div[2]/strong[2]"));
			expect(balance.getText()).toBe('2000');

		});

		xit("TransactionAfterDeposit", function() {
			// browser.get('http://www.way2automation.com/angularjs-protractor/banking/#/login');
			//element(by.buttonText("Customer Login")).click();
			//browser.sleep(3000);

			// loginUser.clickName("2");
			//  browser.sleep(2000);

			// loginUser.clickLoginButton();
			//browser.sleep(2000);

			//loginUser.clickAccountNumber("number:1006");
			//browser.sleep(2000);

			/* depositPage.clickDepositButton();
			 browser.sleep(2000);
			 
			 depositPage.enterDepositAmount(2000);
			 browser.sleep(2000);
			 
			 depositPage.clickDepositDefaultButton();
			 browser.sleep(2000);*/

			loginUser.clickTransactionButton();
			browser.sleep(2000);
			
			expect(element(by.xpath(".//*[@id='anchor0']/td[2]")).getText()).toBe("2000");
			expect(element(by.xpath(".//*[@id='anchor0']/td[3]")).getText()).toBe("Credit");
							
		});

		xit("WithdrawError", function() {
			//browser.get('http://www.way2automation.com/angularjs-protractor/banking/#/login');
			/* element(by.buttonText("Customer Login")).click();
			 //browser.sleep(3000);
			 
			 loginUser.clickName("2");
			//  browser.sleep(2000);
			 
			 loginUser.clickLoginButton();
			 browser.sleep(2000);
			 
			 loginUser.clickAccountNumber("number:1006");
			 browser.sleep(2000);*/

			/* depositPage.clickDepositButton();
			 browser.sleep(2000);
			 
			 depositPage.enterDepositAmount(2000);
			 browser.sleep(2000);
			 
			 depositPage.clickDepositDefaultButton();
			 browser.sleep(2000);*/

			loginUser.clickBackButton();
			browser.sleep(2000);

			withdrawPage.clickWithDrawButton();
			browser.sleep(2000);

			withdrawPage.enterWithdrawAmount(2001);
			browser.sleep(2000);

			withdrawPage.clickWithdrawDefaultButton();
			browser.sleep(2000);
			

			element(by.model('accountNo')).$('[value="number:1006"]').click();
			browser.sleep(500);
			var withdrawErr=element(by.xpath("html/body/div[3]/div/div[2]/div/div[4]/div/span"));
			expect(withdrawErr.getText()).toBe('Transaction Failed. You can not withdraw amount more than the balance.');

		});

		xit("WithdrawSuccess", function() {
			/*browser.get('http://www.way2automation.com/angularjs-protractor/banking/#/login');
			element(by.buttonText("Customer Login")).click();
			//browser.sleep(3000);
			
			loginUser.clickName("2");
			//  browser.sleep(2000);
			
			loginUser.clickLoginButton();
			browser.sleep(2000);
			
			loginUser.clickAccountNumber("number:1006");
			browser.sleep(2000);
			
			withdrawPage.clickWithDrawButton();
			browser.sleep(2000);
			 */
			withdrawPage.enterWithdrawAmount(1000);
			browser.sleep(2000);

			withdrawPage.clickWithdrawDefaultButton();
			browser.sleep(2000);
			
			element(by.model('accountNo')).$('[value="number:1006"]').click();
			browser.sleep(500);
			var withdrawSuc=element(by.xpath("html/body/div[3]/div/div[2]/div/div[4]/div/span"));
			expect(withdrawSuc.getText()).toBe('Transaction successful');
			

		});

		xit("TransationAfterWithdraw", function() {
			/*browser.get('http://www.way2automation.com/angularjs-protractor/banking/#/login');
			element(by.buttonText("Customer Login")).click();
			//browser.sleep(3000);
			
			loginUser.clickName("2");
			//  browser.sleep(2000);
			
			loginUser.clickLoginButton();
			browser.sleep(2000);
			
			loginUser.clickAccountNumber("number:1006");
			browser.sleep(2000);
			
			depositPage.clickDepositButton();
			browser.sleep(2000);
			
			depositPage.enterDepositAmount(2000);
			browser.sleep(2000);
			
			depositPage.clickDepositDefaultButton();
			browser.sleep(2000);
			
			withdrawPage.clickWithDrawButton();
			browser.sleep(2000);
			
			withdrawPage.enterWithdrawAmount(1000);
			browser.sleep(2000);
			
			withdrawPage.clickWithdrawDefaultButton();
			browser.sleep(2000);*/

			loginUser.clickTransactionButton();
			browser.sleep(2000);

		});
		xit("TransationReset",function() {
					browser.get('http://www.way2automation.com/angularjs-protractor/banking/#/login');
					element(by.buttonText("Customer Login")).click();
					browser.sleep(3000);

					loginUser.clickName("2");
					browser.sleep(2000);

					loginUser.clickLoginButton();
					browser.sleep(2000);

					loginUser.clickTransactionButton();
					browser.sleep(2000);
					
					$$('table tr').count().then(function countRows(count) {
					    if (count > 1) {
					    	console.log('Table Not Empty')
					    } else {
					    	console.log('Table Empty')
					    }
					  });
		xit("To go to main age", function() {
						/* browser.get('http://www.way2automation.com/angularjs-protractor/banking/#/login');
						 element(by.buttonText("Customer Login")).click();
						 browser.sleep(3000);

						 loginUser.clickName("2");
						 browser.sleep(2000);
						 
						 loginUser.clickLoginButton();
						 browser.sleep(2000);
						 
						 loginUser.clickTransactionButton();
						 browser.sleep(2000);*/

						loginUser.clickBackButton();
						browser.sleep(2000);
						
						var mainpage=element(by.xpath("html/body/div[3]/div/div[2]/div/div[1]/strong/span"));
						expect(mainpage.getText()).toBe('Harry Potter');

					});

					xit("To Logout", function() {
						/* browser.get('http://www.way2automation.com/angularjs-protractor/banking/#/login');
						 element(by.buttonText("Customer Login")).click();
						 browser.sleep(3000);

						 loginUser.clickName("2");
						 browser.sleep(2000);
						 
						 loginUser.clickLoginButton();
						 browser.sleep(2000);
						 
						 loginUser.clickTransactionButton();
						 browser.sleep(2000);
						 
						 loginUser.clickBackButton();
						 browser.sleep(2000);*/

						loginUser.clickLogoutButton();
						browser.sleep(2000);
						
						element(by.model('custId'));
						browser.sleep(500);
						var yourNameObject = element(by.xpath("html/body/div[3]/div/div[2]/div/form/div/label")).getText()
						expect(yourNameObject).toBe("Your Name :");
						
						var logout = element(by.xpath(".//*[@id='userSelect']")).$('[value=""]');
						
						console.log("siva " + logout.getText());
						expect(logout.getText()).toBe("---Your Name---");

					});
			

				});

});