export interface ICategories {
    CategoryID: number;
    CategoryName: string;
    Description: string;
    Picture: Buffer;
    Products?: IProducts[];
}

export interface ICustomerDemographics {
    CustomerTypeID: string;
    CustomerDesc: string;
    Customers?: ICustomers[];
}

export interface ICustomers {
    CustomerID: string;
    CompanyName: string;
    ContactName: string;
    ContactTitle: string;
    Address: string;
    City: string;
    Region: string;
    PostalCode: string;
    Country: string;
    Phone: string;
    Fax: string;
    Orders?: IOrders[];
    CustomerDemographics?: ICustomerDemographics[];
}

export interface IEmployees {
    EmployeeID: number;
    LastName: string;
    FirstName: string;
    Title: string;
    TitleOfCourtesy: string;
    BirthDate: Date;
    HireDate: Date;
    Address: string;
    City: string;
    Region: string;
    PostalCode: string;
    Country: string;
    HomePhone: string;
    Extension: string;
    Photo: Buffer;
    Notes: string;
    ReportsTo: number;
    PhotoPath: string;
    Employees1?: IEmployees[];
    Employee1?: IEmployees;
    Orders?: IOrders[];
    Territories?: ITerritories[];
}

export interface IOrder_Details {
    OrderID: number;
    ProductID: number;
    UnitPrice: number;
    Quantity: number;
    Discount: number;
    Order?: IOrders;
    Product?: IProducts;
}

export interface IOrders {
    OrderID: number;
    CustomerID: string;
    EmployeeID: number;
    OrderDate: Date;
    RequiredDate: Date;
    ShippedDate: Date;
    ShipVia: number;
    Freight: number;
    ShipName: string;
    ShipAddress: string;
    ShipCity: string;
    ShipRegion: string;
    ShipPostalCode: string;
    ShipCountry: string;
    Customer?: ICustomers;
    Employee?: IEmployees;
    Order_Details?: IOrder_Details[];
    Shipper?: IShippers;
}

export interface IProducts {
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

export interface IRegions {
    RegionID: number;
    RegionDescription: string;
    Territories?: ITerritories[];
}

export interface IShippers {
    ShipperID: number;
    CompanyName: string;
    Phone: string;
    Orders?: IOrders[];
}

export interface ISuppliers {
    SupplierID: number;
    CompanyName: string;
    ContactName: string;
    ContactTitle: string;
    Address: string;
    City: string;
    Region: string;
    PostalCode: string;
    Country: string;
    Phone: string;
    Fax: string;
    HomePage: string;
    Products?: IProducts[];
}

export interface ITerritories {
    TerritoryID: string;
    TerritoryDescription: string;
    RegionID: number;
    Region?: IRegions;
    Employees?: IEmployees[];
}

export interface IAlphabetical_list_of_products {
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
    CategoryName: string;
}

export interface ICategory_Sales_for_1997 {
    CategoryName: string;
    CategorySales: number;
}

export interface ICurrent_Product_Lists {
    ProductID: number;
    ProductName: string;
}

export interface ICustomer_and_Suppliers_by_Cities {
    City: string;
    CompanyName: string;
    ContactName: string;
    Relationship: string;
}

export interface IInvoices {
    ShipName: string;
    ShipAddress: string;
    ShipCity: string;
    ShipRegion: string;
    ShipPostalCode: string;
    ShipCountry: string;
    CustomerID: string;
    CustomerName: string;
    Address: string;
    City: string;
    Region: string;
    PostalCode: string;
    Country: string;
    Salesperson: string;
    OrderID: number;
    OrderDate: Date;
    RequiredDate: Date;
    ShippedDate: Date;
    ShipperName: string;
    ProductID: number;
    ProductName: string;
    UnitPrice: number;
    Quantity: number;
    Discount: number;
    ExtendedPrice: number;
    Freight: number;
}

export interface IOrder_Details_Extendeds {
    OrderID: number;
    ProductID: number;
    ProductName: string;
    UnitPrice: number;
    Quantity: number;
    Discount: number;
    ExtendedPrice: number;
}

export interface IOrder_Subtotals {
    OrderID: number;
    Subtotal: number;
}

export interface IOrders_Qries {
    OrderID: number;
    CustomerID: string;
    EmployeeID: number;
    OrderDate: Date;
    RequiredDate: Date;
    ShippedDate: Date;
    ShipVia: number;
    Freight: number;
    ShipName: string;
    ShipAddress: string;
    ShipCity: string;
    ShipRegion: string;
    ShipPostalCode: string;
    ShipCountry: string;
    CompanyName: string;
    Address: string;
    City: string;
    Region: string;
    PostalCode: string;
    Country: string;
}

export interface IProduct_Sales_for_1997 {
    CategoryName: string;
    ProductName: string;
    ProductSales: number;
}

export interface IProducts_Above_Average_Prices {
    ProductName: string;
    UnitPrice: number;
}

export interface IProducts_by_Categories {
    CategoryName: string;
    ProductName: string;
    QuantityPerUnit: string;
    UnitsInStock: number;
    Discontinued: boolean;
}

export interface ISales_by_Categories {
    CategoryID: number;
    CategoryName: string;
    ProductName: string;
    ProductSales: number;
}

export interface ISales_Totals_by_Amounts {
    SaleAmount: number;
    OrderID: number;
    CompanyName: string;
    ShippedDate: Date;
}

export interface ISummary_of_Sales_by_Quarters {
    ShippedDate: Date;
    OrderID: number;
    Subtotal: number;
}

export interface ISummary_of_Sales_by_Years {
    ShippedDate: Date;
    OrderID: number;
    Subtotal: number;
}

export enum Entity {
    Categories = "northwind.Categories",
    CustomerDemographics = "northwind.CustomerDemographics",
    Customers = "northwind.Customers",
    Employees = "northwind.Employees",
    Order_Details = "northwind.Order_Details",
    Orders = "northwind.Orders",
    Products = "northwind.Products",
    Regions = "northwind.Regions",
    Shippers = "northwind.Shippers",
    Suppliers = "northwind.Suppliers",
    Territories = "northwind.Territories",
    Alphabetical_list_of_products = "northwind.Alphabetical_list_of_products",
    Category_Sales_for_1997 = "northwind.Category_Sales_for_1997",
    Current_Product_Lists = "northwind.Current_Product_Lists",
    Customer_and_Suppliers_by_Cities = "northwind.Customer_and_Suppliers_by_Cities",
    Invoices = "northwind.Invoices",
    Order_Details_Extendeds = "northwind.Order_Details_Extendeds",
    Order_Subtotals = "northwind.Order_Subtotals",
    Orders_Qries = "northwind.Orders_Qries",
    Product_Sales_for_1997 = "northwind.Product_Sales_for_1997",
    Products_Above_Average_Prices = "northwind.Products_Above_Average_Prices",
    Products_by_Categories = "northwind.Products_by_Categories",
    Sales_by_Categories = "northwind.Sales_by_Categories",
    Sales_Totals_by_Amounts = "northwind.Sales_Totals_by_Amounts",
    Summary_of_Sales_by_Quarters = "northwind.Summary_of_Sales_by_Quarters",
    Summary_of_Sales_by_Years = "northwind.Summary_of_Sales_by_Years"
}

export enum SanitizedEntity {
    Categories = "Categories",
    CustomerDemographics = "CustomerDemographics",
    Customers = "Customers",
    Employees = "Employees",
    Order_Details = "Order_Details",
    Orders = "Orders",
    Products = "Products",
    Regions = "Regions",
    Shippers = "Shippers",
    Suppliers = "Suppliers",
    Territories = "Territories",
    Alphabetical_list_of_products = "Alphabetical_list_of_products",
    Category_Sales_for_1997 = "Category_Sales_for_1997",
    Current_Product_Lists = "Current_Product_Lists",
    Customer_and_Suppliers_by_Cities = "Customer_and_Suppliers_by_Cities",
    Invoices = "Invoices",
    Order_Details_Extendeds = "Order_Details_Extendeds",
    Order_Subtotals = "Order_Subtotals",
    Orders_Qries = "Orders_Qries",
    Product_Sales_for_1997 = "Product_Sales_for_1997",
    Products_Above_Average_Prices = "Products_Above_Average_Prices",
    Products_by_Categories = "Products_by_Categories",
    Sales_by_Categories = "Sales_by_Categories",
    Sales_Totals_by_Amounts = "Sales_Totals_by_Amounts",
    Summary_of_Sales_by_Quarters = "Summary_of_Sales_by_Quarters",
    Summary_of_Sales_by_Years = "Summary_of_Sales_by_Years"
}
