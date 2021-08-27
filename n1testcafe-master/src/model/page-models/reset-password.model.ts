import { Selector, t } from 'testcafe';
import LoginPage from '../page-models/login.model';
import { Account } from '../account';
import Routing from '../routing';

class ResetPasswordPage {
	// TODO - Create page model following the standards of login.model.ts and forgot-password.model.ts
	public customerNumber: Selector;
	public verificationCode: Selector;
	public submitButton: Selector;
	public successMessage: Selector;
	public newPassword: Selector;
	public confirmPassword: Selector;
	public setPasswordButton: Selector;

	constructor(){
		this.customerNumber = Selector('input[formcontrolname="customerNumber"]');
		this.verificationCode = Selector('input[formcontrolname="code"]');
		this.submitButton = Selector('button[type="submit"]');
		this.successMessage = Selector('n1-alert-message .alert[type="success"]');
		this.newPassword = Selector('input[formcontrolname="password"]');
		this.confirmPassword = Selector('input[formcontrolname="passwordConfirmation"]');
		this.setPasswordButton = Selector('button[type="submit"]')
	}

	async navigateToVerificationPage() {
		await t.navigateTo(`https://app-demo.novemberfirst.com/${Routing.CUSTOMER_VERIFICATION}`);
	}

	async submitVerificationForm(account: Account) {
		await t
			.typeText(this.customerNumber, account.accountNumber)
			
			.click(this.submitButton);
	}

	async navigateToPasswordResetPage() {
		await t.navigateTo(`https://app-demo.novemberfirst.com/${Routing.RESET_PASSWORD}`);
	}

	async submitPasswordRestForm() {
		await t
			.typeText(this.newPassword,"Amit@2020")
			.typeText(this.confirmPassword,"Amit@2020")
			.click(this.setPasswordButton);
	}


}	

