export type MailType = 'plain' | 'html';

export class SendMailDto {
  constructor(
    public from: string,
    public to: string,
    public subject: string,
    public content: string,
    public type: MailType,
  ) {}
}
