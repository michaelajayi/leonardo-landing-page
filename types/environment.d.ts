declare global {
  namespace NodeJS {
    interface ProcessEnv {
      MONGODB_URI: string;
      RESEND_API_KEY: string;
      RESEND_FROM_EMAIL: string;
      MAIL_MAILER: string;
      MAIL_FROM_ADDRESS: string;
      MAIL_FROM_NAME: string;
    }
  }
}
