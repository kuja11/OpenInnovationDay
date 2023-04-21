import { ICategories, IOrder_Details, ISuppliers } from "./northwind";

export interface IUser {
    ID: string;
    createdAt?: Date;
    createdBy?: string;
    modifiedAt?: Date;
    modifiedBy?: string;
    firstName: string;
    lastName: string;
    userName: string;
    email: string;
}

export interface INWProduct {
    ProductID: number;
    ProductName: string;
    SupplierID: number;
    CategoryID: number;
    QuantityPerUnit: string;
    UnitPrice: number;
    UnitsInStock: number;
    UnitsOnOrder: number;
    ReorderLevel: number;
    Discontinued: boolean;
    Category?: ICategories;
    Order_Details?: IOrder_Details[];
    Supplier?: ISuppliers;
}

export enum Entity {
    User = "BasicService.User",
    NWProduct = "BasicService.NWProduct"
}

export enum SanitizedEntity {
    User = "User",
    NWProduct = "NWProduct"
}
