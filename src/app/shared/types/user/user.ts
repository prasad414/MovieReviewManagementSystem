import { RegistraionStatusEnum } from '@shared/enums';

export class AddLenderUserDialogInput {
    lenderId: number = 0;
    lenderUser: IdentityUser;
}

export class IdentityUser {
    userId: number = 0;
    name: string;
    userName: string;
    email: string;
    roleId: number;
    roleName: string;
    lenderId: number = 0;
    isActive: boolean = false;
    isDeleted: boolean = false;
}

export class RegisterUser {
    userId: number;
    name: string;
    userName: string;
    password: string;
    email: string;
    roleId: number;
    lenderId: number = 0;
    registraionStatus: RegistraionStatusEnum;

    isActive: boolean = true;

}
