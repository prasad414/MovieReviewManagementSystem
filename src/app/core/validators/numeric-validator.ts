import { AbstractControl } from '@angular/forms';

export function NumberOnlyValidator(control: AbstractControl): { [key: string]: any } | null {
    const valid = /^\d+$/.test(control.value);
    return valid ? null : { numeric: { valid: false, value: control.value } };
}
