declare global {
  namespace NodeJS {
    interface ProcessEnv {
      TOKEN: string;
      ENVIRONMENT: "dev" | "prod"
    }
  }
}
