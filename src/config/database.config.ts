import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
import { config } from 'dotenv';

// this will explicitly load .env, we will get a merged process.env
config();

const {
  MYSQL_HOST: host,
  MYSQL_USER: username,
  MYSQL_PORT: port,
  MYSQL_PASSWORD: password,
  MYSQL_DATABASE: database
} = process.env;

module.exports = {
  type: 'mysql',
  host,
  port: Number(port),
  username,
  password,
  database,
  synchronize: true, //make it true
  timezone: 'utc',
  charset: 'utf8mb4_unicode_ci',
  extra: {
    charset: "utf8mb4_unicode_ci"
  },
  keepConnectionAlive: true,
  logging: false,
  entities: [`${__dirname}/../**/entities/*.{ts,js}`],
  migrations: [`${__dirname}/../**/migrations/*.{ts,js}`],
  subscribers: [`${__dirname}/../**/subscribers/*.{ts,js}`],
  cli: {
    entitiesDir: `${__dirname}/../**/entities/*.{ts,js}`,
    migrationsDir: `${__dirname}/../**/migrations/*.{ts,js}`,
    subscribersDir: `${__dirname}/../**/subscribers/*.{ts,js}`,
  },
  namingStrategy: new SnakeNamingStrategy()
};
