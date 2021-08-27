import { Selector, t } from 'testcafe';
import Routing from '../routing';

class SignupPage {
	public countryCode: Selector;
	public registrationNumber: Selector;
	public firstName: Selector;
	public lastName: Selector;
	public email: Selector;
	public emailConfirmation: Selector;
	public phoneNumber: Selector;
	public submitButton: Selector;
	public loginLink: Selector;
	public successMessage: Selector;
	public errorMessage: Selector;
	public duplicatedCVRWarning: Selector;
	public consentCheckbox: Selector;
	public alertMessage: Selector;
	public verificationPage: Selector;
	public existingAccount: Selector;
	public confirmAnotherAccount: Selector;

	constructor() {
		this.countryCode = Selector('mat-select[formcontrolname="countryCode"]');
		this.registrationNumber = Selector('input[formcontrolname="registrationNumber"]');
		this.firstName = Selector('input[formcontrolname="firstName"]');
		this.lastName = Selector('input[formcontrolname="lastName"]');
		this.email = Selector('input[formcontrolname="email"]');
		this.emailConfirmation = Selector('input[formcontrolname="emailConfirmation"]');
		this.phoneNumber = Selector('input[formcontrolname="phoneNumber"]');
		this.submitButton = Selector('button[type="submit"]');
		this.loginLink = Selector('a[href="#/public"]');
		this.successMessage = Selector('n1-alert-message .alert[type="success"]');
		this.alertMessage = Selector('n1-alert-message');
		this.errorMessage = this.alertMessage.withAttribute('name', 'failed_login');
		this.duplicatedCVRWarning = this.alertMessage.withAttribute('name', 'duplicate-warning');
		this.consentCheckbox = Selector('mat-checkbox[formcontrolname="signupConsent"]');
		this.verificationPage = Selector('n1-verification-code');
		//this.existingAccount = Selector('');
		this.confirmAnotherAccount = Selector('button[name="confirm"]');

	}

	async navigateToPage() {
		await t.navigateTo(`https://app-demo.novemberfirst.com/${Routing.SIGN_UP}`);
	}

	async fillForm(cvr: string, email: string) {

		await t
			.typeText(this.registrationNumber,cvr)
			.typeText(this.firstName,'Rohan', {speed:0.05})
			.typeText(this.lastName,'Kalal', {speed:0.05})
			.typeText(this.email,email)
			.typeText(this.emailConfirmation,email)
			.typeText(this.phoneNumber,'9448572322', {speed:0.05});
	}

	async submitForm() {

		await t
			.click(this.consentCheckbox)
			.click(this.submitButton)
			.click(this.confirmAnotherAccount);

	}

	async selectCountry() {
		await t
			.click(this.countryCode)
			.wait(1000)
			.click(this.countryOption('DK'));
	}

	async fillPersonalInfo(cvr: string, email: string) {
		// TODO - implement missing method.
		// This method is a guidance. You can define any other method in this page-model that resembles the page actions

	}

	private countryOption(value: string): Selector {
		return Selector('mat-option[country-code="' + value + '"]');
	}
}

export default new SignupPage();
