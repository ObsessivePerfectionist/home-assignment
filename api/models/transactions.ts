// Models

interface Amount {
    currency: string;
    value: number;
    stringValue: string;
  }
  
  interface AttachedTransactable {
    id: string;
    type: string;
  }
  
  interface BankTransactionCode {
    description: string;
    domain: string;
    family: string;
    subfamily: string;
  }
  
  interface CurrencyExchange {
    exchangeRate: string;
    sourceCurrency: string;
    targetCurrency: string;
    unitCurrency: string;
  }
  
  // Type for return reason
  interface ReturnReason {
    code: string;
    description: string;
    originalBankTransactionCode: { domain: string };
  }
  
  export interface Transaction {
    accountId: string;
    amount: Amount;
    attachedTransactables: AttachedTransactable[];
    bankTransactionCode: BankTransactionCode;
    created: string;
    currencyExchange: CurrencyExchange;
    date: string;
    description: string;
    id: string;
    instructedAmount: Amount;
    organizationId: string;
    reconciliationStatus: string;
    reference: string;
    returnReason?: ReturnReason;
    returned: boolean;
    updated: string;
    valueDate: string;
    version: number;
  }

  