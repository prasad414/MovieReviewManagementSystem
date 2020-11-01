// Model PropertyName => ExcelColumnName
export const UnitedOneColumnMappings = {
    'LoanNumber': 'LoanNumber',
    'LoanAmount': 'LoanAmount',
    'LoanTermYears': 'LoanTermYears',
    'LoanMaturityDate': 'LoanMaturityDate',
    'BorrowerName': 'BorrowerName',
    'CoBorrowerName': 'CoBorrowerName',
    'MonitoringSince': 'MonitoringSince',
    'MonitoringTerm': 'MonitoringTerm',
    'ParcelNumber': 'ParcelNumber',
    'OwnerName': 'OwnerName',
    'Address1': 'Address1',
    'City': 'City',
    'State': 'State',
    'County': 'County',
    'Municipality': 'Municipality',
    'ZipCode': 'ZipCode',
};

// Model PropertyName => ExcelColumnName
export const CrossValleyColumnMappings = {
    'OwnerName': 'Name',
    'Address1': 'Address',
    'CountyName': 'County',
    'LoanAmount': 'Loan Amount',
    'LoanMaturityDate': 'Maturity',
    'LoanNumber': 'Loan #',
};

// Model PropertyName => ExcelColumnName
export const NewTripoliColumnMappings = {
    'LoanNumber': 'ACCTNBR',
    'Mino': 'MINO',
    'OwnerName': 'OWNERSORTNAME',
    'MonitoringSince': 'CONTRACTDATE',
    'LoanMaturityDate': 'MATURIT',
    'MonitoringTerm': 'Term',
    'LoanAmount': 'LOAN AMOUNT',
    'Use': 'USE',
    'Value': 'VALUE',
    'ParcelNumber': 'PROPID',
    'PropertyType': 'PROPTYPDESC',
    'AddressDetail': 'PROPDESC',
};

export const LoanResultColumns = [
    { title: 'Loan Number', index: 'loanNumber', width: '150px', fixed: 'left' },
    { title: 'Parcel Number', index: 'parcelNumber', width: '150px' },
    { title: 'Loan Amount', index: 'loanAmount', width: '150px' },
    { title: 'Loan Term Years', index: 'loanTermYears', width: '150px' },
    { title: 'Loan Maturity Date', index: 'loanMaturityDate', width: '150px' },
    { title: 'Borrower Name', index: 'borrowerName', width: '150px' },
    { title: 'CoBorrower Name', index: 'coBorrowerName', width: '150px' },
    { title: 'Monitoring Since', index: 'monitoringSince', width: '150px' },
    { title: 'Monitoring Term', index: 'monitoringTerm', width: '150px' },
    { title: 'Owner Name', index: 'ownerName', width: '150px' },
    { title: 'Address1', index: 'address1', width: '150px' },
    { title: 'City', index: 'city', width: '150px' },
    { title: 'State', index: 'state', width: '150px' },
    { title: 'County', index: 'county', width: '150px' },
    { title: 'Municipality', index: 'municipality', width: '150px' },
    { title: 'ZipCode', index: 'zipCode', width: '150px' },
    { title: 'Actions', index: 'options', width: '50px', type: 'button', fixed: 'right' },
];

export class LuMessage {
    TestMessage = 'This is TestMessage';

    SuccessText = 'Success';
    ErrorText = 'Failed';
    LenderUserAdded = 'Lender user added successfully.';
    UserAdded = 'User added successfully';
    FailedToAddUser = 'Failed to add user';
    UserExistsTitle = 'User Already Exists';
    UserExistsMessage = 'Failed to add user, as this user already exists';
    PasswordSentToEmail = 'Password will be sent to this email';
}

export const MessageEnum = new LuMessage();
