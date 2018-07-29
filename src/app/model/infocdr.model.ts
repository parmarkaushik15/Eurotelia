export class InfoCdr {
    callerE164:string;
    callerAccessE164:string;
    callerProductId:string;
    callerToGatewayE164:string;
    callerGateway:string;
    callerip:string;
    calleeE164:string;
    calleeAccessE164:string;
    calleeProductId:string;
    calleeToGatewayE164:string;
    calleeGateway:string;
    calleeip:string;
    start:number;
    stop:number;
    holdTime:number;
    feeTime:number;
    fee:number;
    feePrefix:string;
    suiteFee:number;
    suiteFeeTime:number;
    agentFee:number;
    agentFeeTime:number;
    agentFeePrefix:string;
    agentSuiteFee:number;
    agentSuiteFeeTime:number;
    callLevel:number;
    account:string;
    agentName:string;
    accountName:string;
    agentAccount:string;
    endDirection:number;    
    endReason:number;
    calleeBilling:number;
    billingMode:number;
   constructor() {
    this.callerE164 = '';
    this.callerAccessE164 = '';
    this.callerProductId = '';
    this.callerToGatewayE164 = '';
    this.callerGateway = '';
    this.callerip = '';
    this.calleeE164 = '';
    this.calleeAccessE164 = '';
    this.calleeProductId = '';
    this.calleeToGatewayE164 = '';
    this.calleeGateway = '';
    this.calleeip = '';
    this.start = 0;
    this.stop = 0;
    this.holdTime = 0;
    this.feeTime = 0;
    this.fee = 0;
    this.feePrefix = '';
    this.suiteFee = 0;
    this.suiteFeeTime = 0;
    this.agentFee = 0;
    this.agentFeeTime = 0;
    this.agentFeePrefix = '';
    this.agentSuiteFee = 0;
    this.agentSuiteFeeTime = 0;
    this.callLevel = 0;
    this.account = '';
    this.agentName = '';
    this.accountName = '';
    this.agentAccount = '';
    this.endDirection = 0;    
    this.endReason = 0;
    this.calleeBilling = 0;
    this.billingMode = 0;
  }
}