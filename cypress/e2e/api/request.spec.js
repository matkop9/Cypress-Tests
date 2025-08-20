/// <reference types="cypress" />

describe('API tests', () => {
	it('[GET] Status and data from api', () => {
		cy.request({
			method: 'GET',
			url: 'https://jsonplaceholder.typicode.com/posts/1',
		}).then((response) => {
			console.log(response.body.title);
			expect(response.status).to.equal(200);
			expect(response.body.title).to.contains(
				'sunt aut facere repellat provident occaecati excepturi optio reprehenderit'
			);
		});
	});

	it('[GET] Uploading user data', () => {
		cy.request({
			method: 'GET',
			url: 'https://jsonplaceholder.typicode.com/users/1',
		}).then((response) => {
			expect(response.body.name).to.contain('Leanne Graham');
		});
	});

	it.only('[POST] Creat new post', () => {
		cy.request({
			method: 'POST',
			url: 'https://jsonplaceholder.typicode.com/posts',
			body: JSON.stringify({
				title: 'Random tilte',
				body: 'test body',
				userId: 1,
			}),
			headers: {
				'Content-type': 'applicattion/json; charset=UTF-8',
			},
		}).then((res) => {
			expect(res.status).to.equal(201);
			expect(res.body.id).to.equal(101);
		});
	});
});
