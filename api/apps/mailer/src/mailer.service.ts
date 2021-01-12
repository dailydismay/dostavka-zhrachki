import { Inject, Injectable, Logger } from '@nestjs/common';
import { Transporter, SendMailOptions } from 'nodemailer';
import { SendMailDto } from './dto/send-mail.dto';
import { SMTP_TRANSPORTER } from './transporter';

@Injectable()
export class MailerService {
  private readonly logger = new Logger('MailerService');

  constructor(
    @Inject(SMTP_TRANSPORTER)
    private transporter: Transporter,
  ) {}

  async send({ content, type, ...data }: SendMailDto): Promise<void> {
    const contentPayload: Pick<SendMailOptions, 'html' | 'text'> = {};

    contentPayload[type] = content;

    await this.transporter.sendMail({
      ...data,
      ...contentPayload,
    });

    this.logger.log(`Sent mail from ${data.from} to ${data.to}`);
  }
}
