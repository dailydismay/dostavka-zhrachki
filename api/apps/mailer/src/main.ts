import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { RmqOptions, Transport } from '@nestjs/microservices';
import { MailerConfig } from './config';
import { MailerModule } from './mailer.module';

async function bootstrap() {
  const app = await NestFactory.create(MailerModule);
  const cfg = app.get<MailerConfig>(ConfigService);

  await app.connectMicroservice<RmqOptions>({
    transport: Transport.RMQ,
    options: {
      urls: [cfg.get('rabbitmqUrl') as string],
      queue: cfg.get('mailerQueueName'),
      prefetchCount: 100,
      noAck: false,
    },
  });

  await app.startAllMicroservicesAsync();
  await app.listen(cfg.get('port'));
}
bootstrap();
