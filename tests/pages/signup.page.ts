import { AppComponent } from "./appComponent";

export class SignUp extends AppComponent{
    private createAccount= this.page.getByRole('button', { name: 'Create an account' });
    private email = this.page.getByRole('main').getByPlaceholder('Please Enter Your Email');
    private firstName = this.page.getByPlaceholder('Please Enter Your First Name');
    private lastName = this.page.getByPlaceholder('Please Enter Your Last Name');
    private signUp = this.page.getByRole('button', { name: 'Sign Up' });

      async signUpNewUser(){
        await this.createAccount.click();
        await this.email.click();
        await this.email.fill(`test+${Date.now()}@noemail.com`);
        await this.email.press('Tab');
        await this.firstName.fill('Vlad');
        await this.firstName.press('Tab');
        await this.lastName.fill('Shkola');
        await this.lastName.press('Tab');
        await this.lastName.fill('1233456');
        await this.signUp.click();
    }
}