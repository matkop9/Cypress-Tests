class ProductList {
	get veryficationAlert() {
		return cy.get('[role="alert"]');
	}
	get veryficationAddedProduct() {
		return cy.get('table td.product-name');
	}

	addProductToList() {
		cy.get('ul.products li').first().click();
		cy.get('[name="add-to-cart"]').first().click({ force: true });
	}
	viewProductList() {
		cy.contains('a', 'View cart').click();
	}
	checkoutPage() {
		cy.contains('.checkout-button', 'Proceed to checkout').click();
	}
	fillCheckoutInputs(
		name,
		lastName,
		country,
		address,
		postcode,
		city,
		phone,
		email
	) {
		cy.get('#billing_first_name').type(name);
		cy.get('#billing_last_name').type(lastName);
		cy.get('#select2-billing_country-container').click();
		cy.contains('.select2-results__option', country).click();
		cy.get('#billing_address_1').type(address);
		cy.get('#billing_postcode').type(postcode);
		cy.get('#billing_city').type(city);
		cy.get('#billing_phone').type(phone);
		cy.get('#billing_email').type(email);
		cy.get('button#place_order').click();
	}
}

export default new ProductList();
