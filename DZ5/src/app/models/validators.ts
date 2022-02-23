import { AbstractControl, ValidationErrors } from "@angular/forms";
import { Observable } from "rxjs";

export class CustomValidators {
    static countries = ['Ukraine', 'Poland', 'Moldova'];
    static notAllowedEmails = ['fortest@gmail.com', 'test.user@gmail.com']

    static acceptableCountries(control: AbstractControl): ValidationErrors | null {
        if (!CustomValidators.countries.includes(control.value)) {
            return { acceptableCountriesError: true };
        } else {
            return null;
        }

    }

    static isEmailAllowedAsync() {

        return (control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> => {
            return new Promise(resolver => {
                setTimeout(() => {
                    if (this.notAllowedEmails.includes(control.value)) {
                        resolver({ notAllowedEmailError: true });
                    } else {
                        resolver(null);
                    }
                }, 2000);
            });
        }
    }

}