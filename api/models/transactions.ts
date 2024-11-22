// Models

// Base type for amounts
interface Amount {
    currency: string;       // Currency code (e.g., "DKK", "EUR")
    value: number;          // Numeric value (e.g., 32542080)
    stringValue: string;    // Human-readable string value (e.g., "325420.80")
  }
  
  // Type for attached transactables
  interface AttachedTransactable {
    id: string;             // Unique identifier for the transactables
    type: string;           // Type of the transactables (e.g., "CREDIT_TRANSFER")
  }
  
  // Type for bank transaction code
  interface BankTransactionCode {
    description: string;    // Detailed description of the transaction code
    domain: string;         // Domain of the transaction (e.g., "PMNT")
    family: string;         // Family (e.g., "ICDT")
    subfamily: string;      // Subfamily (e.g., "RRTN")
  }
  
  // Type for currency exchange information
  interface CurrencyExchange {
    exchangeRate: string;   // Exchange rate (e.g., "7.44193")
    sourceCurrency: string; // Original currency (e.g., "EUR")
    targetCurrency: string; // Target currency (e.g., "DKK")
    unitCurrency: string;   // Currency for one unit (e.g., "EUR")
  }
  
  // Type for return reason
  interface ReturnReason {
    code: string;           // Return reason code (e.g., "AC04")
    description: string;    // Description of the return reason
    originalBankTransactionCode: { domain: string }; // Original transaction domain
  }
  
  // Main type for the transaction data
  export interface Transaction {
    accountId: string;                     // Unique account ID
    amount: Amount;                        // Transaction amount details
    attachedTransactables: AttachedTransactable[]; // Array of attached transactables
    bankTransactionCode: BankTransactionCode; // Bank transaction code details
    created: string;                       // ISO date of creation
    currencyExchange: CurrencyExchange;    // Currency exchange details
    date: string;                          // Date of the transaction
    description: string;                   // Transaction description
    id: string;                            // Unique transaction ID
    instructedAmount: Amount;              // Instructed amount details
    organizationId: string;                // Unique organization ID
    reconciliationStatus: string;          // Status of reconciliation (e.g., "RECONCILED")
    reference: string;                     // Reference for the transaction
    returnReason?: ReturnReason;           // Optional return reason details
    returned: boolean;                     // Indicates if the transaction was returned
    updated: string;                       // ISO date of last update
    valueDate: string;                     // Value date
    version: number;                       // Version of the record
  }

  