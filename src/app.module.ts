import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { CustomersModule } from './customers/customers.module';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      definitions: {
        path: join(process.cwd(), '/src/generated/schema.graphql.ts'),
        outputAs: 'class'
      },
      playground: true,
      introspection: true,
      typePaths: ['./**/*.graphql'],
      resolverValidationOptions: {
        requireResolversForResolveType: false
      }
    }),
    CustomersModule,
    ProductsModule
  ]
})
export class AppModule {}
