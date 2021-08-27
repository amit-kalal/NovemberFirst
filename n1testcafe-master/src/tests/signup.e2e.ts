import Routing from "../model/routing";
import {t} from 'testcafe';
import Times from '../model/waiting-times';
import SignupPage from '../model/page-models/signup.model';

fixture('Signup')
	.page(`https://app-demo.novemberfirst.com/${Routing.SIGN_UP}`)
	.meta('section', 'public');

test
('Submit valid credentials', async t => {
	const cvr = "28703228";
	const yourPersonalEmail = "tcserfrustrated@gmail.com";
	await SignupPage.fillForm(cvr, yourPersonalEmail);
	await SignupPage.submitForm();
	await t.expect(SignupPage.verificationPage.exists).ok({ timeout: Times.LONG });
});

