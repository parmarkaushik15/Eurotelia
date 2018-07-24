export class CustomerInfo {
      cardType:number;
      cardNumber:number;
      address:string;
      postCode:number;
      linkMan:string;
      telephone:number;
      fax:number;
      email:string;
      emailCc:string;
      emailBcc:string;
      reportType:number;
      companyName:string;
      bank:string
     constructor() {
        this.address = '';
        this.cardType = 0;
        this.cardNumber = 0;
        this.postCode = 0;
        this.linkMan = '';
        this.telephone = 0;
        this.fax = 0;
        this.email = '';
        this.emailCc = '';
        this.emailBcc = '';
        this.reportType = 0;
        this.companyName = '';
        this.bank = '';
    }
}