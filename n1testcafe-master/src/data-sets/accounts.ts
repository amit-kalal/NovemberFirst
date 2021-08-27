import { Account } from '../model/account';

export const e2eaccount: Account = {
	// TODO - store here the account number, email and password of the created account on demo environment.
	accountNumber: '208102302',
	email: 'amit689kalal@gmail.com',
	password: 'Amit@1994',
	environment: 'demo',
	economicToken: ''
};

export const invalidAcc: Account = {
    accountNumber: '12345678',
	email: 'amit@gmail.com',
	password: 'test@123',
	environment: 'demo',
	economicToken: ''
};

export const emailTestAccount: Account = {
    accountNumber: '208102320',
	email: 'amitkk@el5e1pel.mailosaur.net',
	password: 'Amit@1994',
	environment: 'demo',
	economicToken: ''
};