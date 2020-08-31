import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { CustomersModule } from './customers/customers.module';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql'],
      resolverValidationOptions: {
        requireResolversForResolveType: false
      },
      playground: true,
      introspection: true
    }),
    CustomersModule,
    ProductsModule
  ]
})
export class AppModule {}
