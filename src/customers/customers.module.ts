import { Module } from '@nestjs/common';
import { CustomersResolver } from './customers.resolver';

@Module({
  providers: [CustomersResolver],
  exports: [CustomersResolver]
})
export class CustomersModule {}
