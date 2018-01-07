var clikOnDepositPage = function() {
	
	this.clickLoginButton = function(){
		element(by.buttonText("Login")).click();
		// return require('./interest.js');
		
	}
	this.clickDepositButton = function(){
		element(by.buttonText("Deposit")).click();
		
	}
	
	this.enterDepositAmount = function(amt){
		 element(by.model("amount")).sendKeys(amt);
		 return this;
	}
	
	this.clickDepositDefaultButton = function(){
		element(by.className("btn-default")).click();
		
	}
	
	
}
	
module.exports = new clikOnDepositPage();