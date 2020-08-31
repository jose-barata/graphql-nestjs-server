import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Product } from 'src/generated/schema.graphql';

@Resolver()
export class ProductsResolver {
  // in memory DB for demo purposes
  productsInMemoryDb: Product[] = [{ id: 0, name: 'headphones', cost: 1000, stock: 1 }];

  @Query()
  products() {
    return this.productsInMemoryDb;
  }

  @Mutation(returns => Product)
  async createProduct(@Args('name') name: string, @Args('cost') cost: number, @Args('stock') stock: number) {
    const id = this.productsInMemoryDb.length;
    const newProduct: Product = { id, name, cost, stock };
    this.productsInMemoryDb.push(newProduct);
    return newProduct;
  }

  @Mutation(returns => Product)
  async updateProduct(
    @Args('id') id: number,
    @Args('name') name: string,
    @Args('cost') cost: number,
    @Args('stock') stock: number
  ) {
    let updatedProduct: Product = this.productsInMemoryDb.find((product: Product) => product.id === id);

    if (updatedProduct) {
      if (name && name != updatedProduct.name) {
        updatedProduct = { ...updatedProduct, name: name };
      }
      if (cost && cost != updatedProduct.cost) {
        updatedProduct = { ...updatedProduct, cost: cost };
      }
      if (stock && stock != updatedProduct.stock) {
        updatedProduct = { ...updatedProduct, stock: stock };
      }

      let productIndex = this.productsInMemoryDb.findIndex((product: Product) => product.id === id);
      this.productsInMemoryDb[productIndex] = updatedProduct;
    }

    return updatedProduct;
  }

  @Mutation(returns => Boolean)
  async deleteProduct(@Args('id') id: number) {
    this.productsInMemoryDb = this.productsInMemoryDb.filter((product: Product) => product.id !== id);
    return true;
  }
}
