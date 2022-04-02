export const envConfiguration = () => {
  return {
    enviroment: 'env',
    port: process.env.PORT,
    postgres: {
      host: process.env.POSTGRES_HOST,
      port: process.env.POSTGRES_PORT,
      user: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DATABASE,
    },
    jwt: {
      secret: process.env.JWT_SECRET,
      expiration: process.env.JWT_EXPIRATION,
    },
    aws: {
      region: process.env.AWS_REGION,
      accesId: process.env.AWS_ACCESS_ID,
      secret: process.env.AWS_SECRET,
      bucket: process.env.AWS_BUCKET,
    },
  };
};
