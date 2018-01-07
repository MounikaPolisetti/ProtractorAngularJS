var addCustomerPage = function(){
	this.enterFirstName = function(fname){
		 element(by.model("fName")).sendKeys(fname);
		 return this;
	}
	this.enterLastName = function(lname){
		 element(by.model("lName")).sendKeys(lname);
		 return this;
	}
	this.enterPostCode = function(code){
		 element(by.model("postCd")).sendKeys(code);
		 return this;
	}
	this.clickAddCustomerButton = function(){
		 element(by.className("btn-default")).click();
		// return require('./interest.js');
		
	}
	
	this.acceptPopup = function(){
		 browser.switchTo().alert().accept();
		 return this;
	}

}
module.exports = new addCustomerPage();