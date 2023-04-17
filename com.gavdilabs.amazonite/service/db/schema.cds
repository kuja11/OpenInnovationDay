using {  managed, sap, cuid } from '@sap/cds/common';

namespace schema;

entity User : cuid, managed {
    firstName: String(255);
    lastName: String(255);
    userName: String(100);
    email: String(255);
}

