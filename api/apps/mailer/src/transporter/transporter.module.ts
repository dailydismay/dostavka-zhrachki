import { Module } from '@nestjs/common';
import { SMTP_TRANSPORTER, transporterProvider } from '.';

@Module({
  providers: [transporterProvider],
  exports: [SMTP_TRANSPORTER],
})
export class TransporterModule {}
