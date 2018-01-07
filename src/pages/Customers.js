var customersPage = function(){
	this.enterCustomerName = function(cname){
		 element(by.model("searchCustomer")).sendKeys(cname);
		 return this;
	}
	
	this.clickDeleteCustomerButton = function(){
		element(by.buttonText("Delete")).click();
		// return require('./interest.js');
		
	}
	
	

}
module.exports = new customersPage();