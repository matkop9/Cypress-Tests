/// <reference types="cypress" />

import ProductList from '../support/pages/ProductList';

describe('Adding Product to card list', () => {
	beforeEach(() => {
		cy.visit('/shop');
	});

	it('Adding one product', () => {
		cy.url().should('include', '/shop');

		ProductList.addProductToList();
		ProductList.veryficationAlert.should(
			'contain.text',
			'Postcard V1” has been added to your cart.'
		);

		ProductList.viewProductList();
		ProductList.veryficationAddedProduct
			.should('contains.text', 'Postcard V1')
			.should('be.visible');

		ProductList.checkoutPage();
		cy.url().should('include', '/checkout');

		ProductList.fillCheckoutInputs(
			'Adam',
			'Adamski',
			'Poland',
			'Dluga 35',
			'45-654',
			'Poznań',
			'456789123',
			'test@test.com'
		);
		ProductList.veryficationAlert.should(
			'contain.text',
			'Invalid payment method.'
		);
	});
});
