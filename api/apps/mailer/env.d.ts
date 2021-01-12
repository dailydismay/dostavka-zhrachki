declare namespace NodeJS {
  export interface ProcessEnv {
    PORT: string;
    RABBITMQ_URI: string;
    SG_API_KEY: string;
    MAILER_QUEUE_NAME: string;
  }
}
