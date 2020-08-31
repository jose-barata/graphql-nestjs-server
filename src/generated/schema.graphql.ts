
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class Customer {
    id: number;
    firstName: string;
    lastName: string;
    taxId: number;
}

export class Product {
    id: number;
    name: string;
    cost: number;
    stock: number;
}

export abstract class IQuery {
    abstract customers(): Customer[] | Promise<Customer[]>;

    abstract products(): Product[] | Promise<Product[]>;
}

export abstract class IMutation {
    abstract createCustomer(firstName: string, lastName: string, taxId: number): Customer | Promise<Customer>;

    abstract updateCustomer(id: number, firstName: string, lastName: string, taxId: number): Customer | Promise<Customer>;

    abstract deleteCustomer(id: number): boolean | Promise<boolean>;

    abstract createProduct(id: number, name: string, cost: number, stock: number): Product | Promise<Product>;

    abstract updateProduct(name: string, cost: number, stock: number): Product | Promise<Product>;

    abstract deleteProduct(id: number): boolean | Promise<boolean>;
}
