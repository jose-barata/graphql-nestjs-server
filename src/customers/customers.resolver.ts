import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Customer } from 'src/generated/schema.graphql';

@Resolver()
export class CustomersResolver {
  // in memory DB for demo purposes
  customersInMemoryDb: Customer[] = [{ id: 0, firstName: 'José', lastName: 'Barata', taxId: 12345 }];

  @Query()
  customers() {
    return this.customersInMemoryDb;
  }

  @Mutation(returns => Customer)
  async createCustomer(
    @Args('firstName') firstName: string,
    @Args('lastName') lastName: string,
    @Args('taxId') taxId: number
  ) {
    const id = this.customersInMemoryDb.length;
    const newCustomer: Customer = { id, firstName, lastName, taxId };
    this.customersInMemoryDb.push(newCustomer);
    return newCustomer;
  }

  @Mutation(returns => Customer)
  async updateCustomer(
    @Args('id') id: number,
    @Args('firstName') firstName: string,
    @Args('lastName') lastName: string,
    @Args('taxId') taxId: number
  ) {
    let updatedCustomer: Customer = this.customersInMemoryDb.find((customer: Customer) => customer.id === id);

    if (updatedCustomer) {
      if (firstName && firstName != updatedCustomer.firstName) {
        updatedCustomer = { ...updatedCustomer, firstName: firstName };
      }
      if (lastName && lastName != updatedCustomer.lastName) {
        updatedCustomer = { ...updatedCustomer, lastName: lastName };
      }
      if (taxId && taxId != updatedCustomer.taxId) {
        updatedCustomer = { ...updatedCustomer, taxId: taxId };
      }

      let customerIndex = this.customersInMemoryDb.findIndex((customer: Customer) => customer.id === id);
      this.customersInMemoryDb[customerIndex] = updatedCustomer;
    }

    return updatedCustomer;
  }

  @Mutation(returns => Boolean)
  async deleteCustomer(@Args('id') id: number) {
    this.customersInMemoryDb = this.customersInMemoryDb.filter((customer: Customer) => customer.id !== id);
    return true;
  }
}
