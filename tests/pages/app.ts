import { AppComponent } from "./appComponent";
import { SignUp } from "./signup.page";

export class Application extends AppComponent{
    public readonly signUp = new SignUp(this.page) ;
}