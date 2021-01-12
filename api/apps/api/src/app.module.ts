import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { RestaurantsModule } from './restaurants/restaurants.module';
import { PaymentsModule } from './payments/payments.module';
import { OrdersModule } from './orders/orders.module';
import { PubsubModule } from './pubsub/pubsub.module';
import { CommonModule } from './common/common.module';

@Module({
  imports: [
    UsersModule,
    AuthModule,
    RestaurantsModule,
    PaymentsModule,
    OrdersModule,
    PubsubModule,
    CommonModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
