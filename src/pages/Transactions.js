var clikOnLoginPage = function() {
	this.clickName = function(num) {
		login = '[value="' + num + '"]'
		element(by.model('custId')).$(login).click();
		return this;
	}

	this.clickLoginButton = function() {
		element(by.buttonText("Login")).click();
		// return require('./interest.js');

	}

	this.clickTransactionButton = function() {
		element(by.buttonText("Transactions")).click();
		//return require('./Transactions.js');

	}

	this.clickAccountNumber = function(num) {
		s = '[value="' + num + '"]'
		element(by.model('accountNo')).$(s).click();

	}
	this.clickBackButton = function() {
		element(by.buttonText("Back")).click();
		// return require('./interest.js');

	}

	this.clickLogoutButton = function() {
		element(by.buttonText("Logout")).click();
		// return require('./interest.js');

	}

}

module.exports = new clikOnLoginPage();