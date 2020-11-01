import { AbstractControl, FormGroup } from '@angular/forms';

export function PhoneNumberValidator(control: AbstractControl): { [key: string]: any } | null {
    // const PHONE_REGEXP = /^(\([0-9]{3}\) |[0-9]{3}-)[0-9]{3}-[0-9]{4}$/;
    // const valid = control.value === '' ? true : PHONE_REGEXP.test(control.value);
    // return valid ? null : { phone: { valid: false, value: control.value } };
    return null;
}

export function ZipCodeValidator(control: AbstractControl): { [key: string]: any } | null {
    // const ZIP_REGEXP = /^[0-9]{5}(?:-[0-9]{4})?$/;
    // const valid = control.value === '' ? true : ZIP_REGEXP.test(control.value);
    // return valid ? null : { zipcode: { valid: false, value: control.value } };
    return null;
}

export function NumberValidator(control: AbstractControl): { [key: string]: any } | null {
    // const NUMBER_REGEXP = /^-?[\d.]+(?:e-?\d+)?$/;
    const NUMBER_REGEXP = /^\d+$/;
    const valid = NUMBER_REGEXP.test(control.value);
    return valid ? null : { number: { valid: false, value: control.value } };
}

export function SsnValidator(control: AbstractControl): { [key: string]: any } | null {
    const SSN_REGEXP = /^(?!219-09-9999|078-05-1120)(?!666|000|9\d{2})\d{3}-(?!00)\d{2}-(?!0{4})\d{4}$/;
    const valid = SSN_REGEXP.test(control.value);
    return valid ? null : { ssn: { valid: false, value: control.value } };
}

export function MatchPassword(group: FormGroup): { [key: string]: any } | null {
    const password = group.controls.password;
    const confirmPassowrd = group.controls.confirmPassowrd;
    if (password.pristine || confirmPassowrd.pristine) {
        return null;
    }
    group.markAsTouched();
    if (password.value === confirmPassowrd.value) {
        return null;
    }
    return { invalidPassword: true };
}

export function scrollToFirstError() {
    const firstElementWithError = document.querySelector('.mat-form-field-flex .ng-invalid');
    if (firstElementWithError) {
        firstElementWithError.scrollIntoView({ behavior: 'smooth' });
    }
}

export function scrollToElement(elementSelector: string) {
    const firstElement = document.querySelector(elementSelector);
    if (firstElement) {
        firstElement.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' });
    }
}

export const Validation = {
    Max: {
        Max5: 5,
        Max10: 10,
        Max15: 15,
        Max25: 25,
        Max50: 50,
        Max100: 100,
        Max250: 250,
        Website: 65,
        Phone: 14,
        ZipCode: 10,
        Max8000: 8000,
        Max2000: 2000,
        Max1000: 1000,
        Max7000: 7000,

        Int: 2000000000, // 2147483647
        IntMax: 2147483647,
        Money: 922337203685477,
        Percent: 100,
        Char100: 100,
        Card: 19,
        Expiry: 5,
        CVV: 4,
        Month: 12,
        Days: 365,
    },
    Min: {
        CVV: 3,
    }
};
