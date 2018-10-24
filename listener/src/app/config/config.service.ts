import * as dotenv from 'dotenv';
import * as fs from 'fs';
import * as Joi from 'joi';

export interface EnvConfig {
  [key: string]: string;
}

export class ConfigService {
  private readonly envConfig: EnvConfig;

  constructor(filePath: string) {
    const config: EnvConfig = this.readEnvFromFile(filePath);
    this.envConfig = this.validateInput(config);
  }

  private readEnvFromFile(filePath: string): EnvConfig {
    if (fs.existsSync(filePath)) {
      return Object.assign(
        dotenv.parse(fs.readFileSync(filePath)),
        process.env,
      );
    } else {
      return process.env;
    }
  }

  /**
   * Ensures all needed variables are set, and returns the validated JavaScript object
   * including the applied default values.
   */
  private validateInput(envConfig: EnvConfig): EnvConfig {
    const envVarsSchema: Joi.ObjectSchema = Joi.object({
      NODE_ENV: Joi.string()
        .valid(['development', 'production', 'test', 'provision'])
        .default('production')
        .optional(),
      PORT: Joi.number()
        .default(3000)
        .optional(),

      POSTGRES_HOST: Joi.string(),
      POSTGRES_USER: Joi.string(),
      POSTGRES_PASSWORD: Joi.string(),
      POSTGRES_DATABASE: Joi.string(),

      STOMP_HOST: Joi.string(),
      STOMP_PORT: Joi.number(),
      STOMP_USER: Joi.string(),
      STOMP_PASSCODE: Joi.string(),
      STOMP_CLIENT_ID: Joi.string(),
      STOMP_DESTINATION: Joi.string(),
    }).options({
      presence: envConfig.NODE_ENV === 'test' ? 'optional' : 'required',
      stripUnknown: true,
    });

    const { error, value: validatedEnvConfig } = Joi.validate(
      envConfig,
      envVarsSchema,
    );

    if (error) {
      throw new Error(`Config validation error: ${error.message}`);
    }

    return validatedEnvConfig;
  }

  get isDevEnvironment(): boolean {
    return Boolean(this.envConfig.NODE_ENV === 'development');
  }

  get isProdEnvironment(): boolean {
    return Boolean(this.envConfig.NODE_ENV === 'production');
  }

  get isTestEnvironment(): boolean {
    return Boolean(this.envConfig.NODE_ENV === 'test');
  }

  get port() {
    return this.envConfig.PORT;
  }

  get postgres() {
    return {
      host: this.envConfig.POSTGRES_HOST,
      username: this.envConfig.POSTGRES_USER,
      password: this.envConfig.POSTGRES_PASSWORD,
      database: this.envConfig.POSTGRES_DATABASE,
    };
  }

  get stomp() {
    return {
      host: this.envConfig.STOMP_HOST,
      port: +this.envConfig.STOMP_PORT,
      login: this.envConfig.STOMP_USER,
      passcode: this.envConfig.STOMP_PASSCODE,
      clientId: this.envConfig.STOMP_CLIENT_ID,
      destination: this.envConfig.STOMP_DESTINATION,
    };
  }
}
