import { Provider } from '@nestjs/common';
import { PubSub } from 'apollo-server-express';
import { PUBSUB_TOKEN } from '.';

export const pubsubProvider: Provider = {
  provide: PUBSUB_TOKEN,
  useFactory: () => {
    return new PubSub();
  },
};
