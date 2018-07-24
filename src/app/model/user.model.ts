import { CustomerInfo } from "./infoCustomerAdditional.model";

export class User {
    account: string;
    name: string;
    limitMoney: number;
    feeRateGroup:string;
    type:number;
    agentAccount:string;
    phoneBookLimit:number;
    validTime:number;
    ctdBillingType:number;
    memo:string;
    infoCustomerAdditional:CustomerInfo;
    constructor() {
        this.feeRateGroup = '';
        this.name = '';
        this.limitMoney = 0;
        this.feeRateGroup = '';
        this.type = 0;
        this.agentAccount = '';
        this.phoneBookLimit = 0;
        this.validTime = 0;
        this.ctdBillingType = 0;
        this.memo = '';
        this.infoCustomerAdditional = new CustomerInfo();
    }
}