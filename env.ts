export const enum env {
  PRODUCTION = 'PRODUCTION',
  DEVELOPMENT = 'DEVELOPMENT',
  STAGING = 'STAGING',
  TESTING = 'TESTING',
}

export const environment: env = env.DEVELOPMENT;

export const getEnvPath = (ev: env) => {
  switch (ev) {
    case env.DEVELOPMENT:
      return '.env.development';
    case env.PRODUCTION:
      return '.env.production';
    case env.STAGING:
      return '.env.staging';
    case env.TESTING:
      return '.env.testing';
    default:
      break;
  }
};
