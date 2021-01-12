import { Global, Module } from '@nestjs/common';
import { pubsubProvider } from './pubsub.provider';

@Global()
@Module({
  providers: [pubsubProvider],
  exports: [pubsubProvider],
})
export class PubsubModule {}
