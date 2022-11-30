export const EnvConfiguration = () => ({
  enviroment: process.env.NODE_ENV || 'dev',
  dbport: process.env.DB_PORT,
  port: process.env.PORT || 3000,
  hostAPI: process.env.HOST_API,
});
