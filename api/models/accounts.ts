export interface Account {
    affiliationId: string;
    created: string;
    currency: string;
    entityId: string;
    etag: string;
    fictive: boolean;
    id: string;
    identifiers: Identifier[];
    market: string;
    name: string;
    organizationId: string;
    routing: Routing[];
    thirdPartyId: string;
    updated: string;
    version: number;
  }
  
  export interface Identifier {
    invalid: boolean;
    market: string;
    number: string;
    type: string;
  }
  
  export interface Routing {
    number: string;
    type: string;
  }
  