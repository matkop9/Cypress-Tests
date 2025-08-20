/// <reference types="cypress" />

import LoginPage from "../support/pages/loginPage";



describe('login', () => {
	beforeEach(() => {
        cy.setMobileViewPort()
		cy.visit('/my-account');
	});

	it('correct login', () => {
		LoginPage.fillForm('test@test.pl', 'randompassword');
		LoginPage.checkRememberMe(true);
        LoginPage.rememberMeCheckbox.should('be.checked')
        LoginPage.subbmit()
        LoginPage.errorMessage.should('contain.text', 'Nieznany adres e-mail. Proszę sprawdzić ponownie lub wypróbować swoją nazwę użytkownika')
	});
});
