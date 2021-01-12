import { Provider } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as nodemailer from 'nodemailer';

import { MailerConfig } from 'apps/mailer/src/config';

export const SMTP_TRANSPORTER = 'SMTP_TRANSPORTER';

export const transporterProvider: Provider = {
  provide: SMTP_TRANSPORTER,
  useFactory: (config: MailerConfig) => {
    const transporter = nodemailer.createTransport({
      host: 'smtp.sendgrid.net',
      port: 465,
      secure: true,
      auth: {
        user: 'apikey',
        pass: config.get('sendGridApiKey'),
      },
    });

    return transporter;
  },
  inject: [ConfigService],
};
