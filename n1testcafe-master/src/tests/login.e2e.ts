import {t} from 'testcafe';
import Routing from '../model/routing';
import Times from '../model/waiting-times';
import LoginPage from '../model/page-models/login.model';
import { Account } from '../model/account';
import { e2eaccount, invalidAcc } from '../data-sets/accounts';


fixture('Login')
	.page(`https://app-demo.novemberfirst.com/${Routing.PUBLIC}`)
	.meta('section', 'public');

test
('Signup link exists', async t => {
	await t.expect(LoginPage.signupLink.exists).ok({ timeout: Times.SHORT });
});

test
('Forgot password link exists', async t => {
	await t.expect(LoginPage.forgotPasswordLink.exists).ok({ timeout: Times.MEDIUM });
});

test
('Submit valid credentials and accounts', async t => {
	LoginPage.submitForm(e2eaccount);
	await t.expect(LoginPage.errorMessage.exists).notOk();
});

test
('Submit invalid credentials and show an error message', async t => {
	LoginPage.submitForm(invalidAcc);
	await t.expect(LoginPage.errorMessage.exists).ok();
});
