var withDrawPage = function() {
	this.clickWithDrawButton = function(){
		element(by.buttonText("Withdrawl")).click();
		
	}
	
	this.enterWithdrawAmount = function(amt){
		 element(by.model("amount")).sendKeys(amt);
		 return this;
	}
	
	this.clickWithdrawDefaultButton = function(){
		element(by.className("btn-default")).click();
		
	}
}

module.exports = new withDrawPage();