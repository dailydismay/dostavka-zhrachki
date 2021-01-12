import { Controller } from '@nestjs/common';
import { Ctx, EventPattern, Payload, RmqContext } from '@nestjs/microservices';
import { SEND_EMAIL_EVENT } from './consts';
import { SendMailDto } from './dto/send-mail.dto';
import { MailerService } from './mailer.service';

@Controller()
export class MailerController {
  constructor(private readonly mailerService: MailerService) {}

  @EventPattern(SEND_EMAIL_EVENT)
  async sendEmailHandler(
    @Payload() data: SendMailDto,
    @Ctx() context: RmqContext,
  ) {
    await this.mailerService.send(data);

    const ch = context.getChannelRef();
    const msg = context.getMessage();
    ch.ack(msg);
  }
}
