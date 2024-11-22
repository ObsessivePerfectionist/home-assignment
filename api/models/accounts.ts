export interface Account {
    affiliationId: string;       // ID of the associated affiliation
    created: string;             // ISO timestamp when the account was created
    currency: string;            // Currency of the account (e.g., "NOK")
    entityId: string;            // ID of the associated entity
    etag: string;                // Version identifier for concurrency control
    fictive: boolean;            // Whether the account is fictive
    id: string;                  // Unique identifier for the account
    identifiers: Identifier[];   // List of identifiers for the account
    market: string;              // Market associated with the account (e.g., "SE")
    name: string;                // Name of the account
    organizationId: string;      // ID of the associated organization
    routing: Routing[];          // List of routing information
    thirdPartyId: string;        // ID of the associated third party
    updated: string;             // ISO timestamp when the account was last updated
    version: number;             // Version number
  }
  
  export interface Identifier {
    invalid: boolean;    // Whether the identifier is invalid
    market: string;      // Market associated with the identifier
    number: string;      // Identifier number (e.g., IBAN or NUMBER)
    type: string;        // Type of the identifier (e.g., "IBAN", "NUMBER")
  }
  
  export interface Routing {
    number: string;      // Routing number (e.g., BIC, SE_SBA)
    type: string;        // Type of routing (e.g., "BIC", "SE_SBA")
  }
  