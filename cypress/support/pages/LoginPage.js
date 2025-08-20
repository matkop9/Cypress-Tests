class LoginPage {
	get usernameField() {
		return cy.get('#username');
	}
	get passwordField() {
		return cy.get('#password');
	}
	get rememberMeCheckbox() {
		return cy.get('#rememberme');
	}
	get submitBtn() {
		return cy.get('button[name="login"]');
	}
	get errorMessage() {
		return cy.get('.woocommerce-error li');
	}

	fillForm(username, password) {
		this.usernameField.type(username);
		this.passwordField.type(password);
	}
	checkRememberMe(rememberMe) {
		rememberMe
			? this.rememberMeCheckbox.check({ force: true })
			: this.rememberMeCheckbox.uncheck;
	}
	subbmit() {
		this.submitBtn.click();
	}
}

export default new LoginPage();
