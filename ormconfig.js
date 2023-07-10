// eslint-disable-next-line @typescript-eslint/no-var-requires
const { SnakeNamingStrategy } = require('typeorm-naming-strategies');
const {config} = require("dotenv");
//import { config } from 'dotenv';
 config();
const {
  TYPEORM_HOST: host,
  TYPEORM_USERNAME: username,
  TYPEORM_PORT: port,
  TYPEORM_PASSWORD: password,
  TYPEORM_DATABASE: database
} = process.env;
console.log("my env data are",process.env)
module.exports = {
  type: 'mysql',
  host: process.env.MYSQL_HOST,
  port: 3308,
  username: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database:process.env.MYSQL_DATABASE,
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
