import { ConfigService } from '@nestjs/config';

export interface IConfigProps {
  port: number;
  rabbitmqUrl: string;
  sendGridApiKey: string;
  mailerQueueName: string;
}

export type MailerConfig = ConfigService<IConfigProps>;

export default () => {
  const config: IConfigProps = {
    port: +process.env.PORT,
    rabbitmqUrl: process.env.RABBITMQ_URI,
    sendGridApiKey: process.env.SG_API_KEY,
    mailerQueueName: process.env.MAILER_QUEUE_NAME,
  };

  return config;
};
