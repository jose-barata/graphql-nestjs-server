import { Module } from '@nestjs/common';
import { ProductsResolver } from './products.resolver';

@Module({
  providers: [ProductsResolver],
  exports: [ProductsResolver]
})
export class ProductsModule {}
