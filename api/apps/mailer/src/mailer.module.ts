import { Module } from '@nestjs/common';
import { MailerController } from './mailer.controller';
import { MailerService } from './mailer.service';
import { TransporterModule } from './transporter/transporter.module';

@Module({
  imports: [TransporterModule],
  controllers: [MailerController],
  providers: [MailerService],
})
export class MailerModule {}
