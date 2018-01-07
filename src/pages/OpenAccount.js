var openAccountPage = function() {
	this.clickCustomer = function(num) {
		s = '[value="' + num + '"]'
		element(by.model('custId')).$(s).click();

	}

	this.clickCurrency = function(nu) {
		cur = '[value="' + nu + '"]'
		element(by.model("currency")).$(cur).click()
		//return this;
	}
	
	this.clickProcessButton = function(){
		element(by.buttonText("Process")).click();
		// return require('./interest.js');
		
	}
	
	this.acceptPopup = function(){
		 browser.switchTo().alert().accept();
		 return this;
	}

}
module.exports = new openAccountPage();