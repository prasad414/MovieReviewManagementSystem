import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

declare var CryptoJS;
@Injectable({ providedIn: 'root' })
export class EncryptionService {
    constructor(
        private router: Router,
    ) {
        //console.log(this);
    }

    secretKey = '53426e9b-2343-44f0-b1af-4608aff2804c';
    enableSecurity = true;

    // Encrypt passed in simpleText using passed in secretKey or default secretKey when enableSecurity is true
    encrypt(simpleText: number, secretKey: string = null) {
        if (this.enableSecurity) {
            if (secretKey == null) { secretKey = this.secretKey; }
            const encrypted = CryptoJS.AES.encrypt(simpleText.toString(), secretKey);
            const encryptedText = encrypted.toString().replace(/\+/g, 'pxxlyyuzzs').replace(/\//g, 'swwlxxayyszzh').replace(/=/g, 'ewwqxxuyyazzl');
            return encryptedText;
        } else {
            return simpleText;
        }
    }

    // Decrypt passed in encryptedText using passed in secretKey or default secretKey when enableSecurity is true
    decrypt(encryptedText: string, secretKey: string = null) {
        encryptedText = encryptedText.replace(/pxxlyyuzzs/g, '+').replace(/swwlxxayyszzh/g, '/').replace(/ewwqxxuyyazzl/g, '=');
        if (this.enableSecurity) {
            if (secretKey == null) { secretKey = this.secretKey; }
            const decrypted = CryptoJS.AES.decrypt(encryptedText, secretKey);
            return decrypted.toString(CryptoJS.enc.Utf8);
        } else {
            return encryptedText;
        }
    }

    // Gets UniqueSecretKey if you want to encript data with different random key, you have to pass same key to decrypt the data
    getUniqueSecretKey() {
        function s4() {
            return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
        }
        return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
    }

    // Navigates to route by encripting the passed in parameter
    navigateToRoute(parentRoute: string, childRoute: string, id: number) {
        // const encryptedId: string = this.encrypt(id);
        const encryptedId: string = id.toString();
        this.router.navigate([parentRoute, childRoute, encryptedId]);
    }

}
